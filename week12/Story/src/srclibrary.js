// ---------- Helpers ----------
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function isValidDateString(value) {
  return typeof value === "string" && !isNaN(Date.parse(value));
}

function daysBetween(from, to) {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((to - from) / msPerDay);
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ---------- 1. Validation & Normalization ----------
function validateBook(book) {
  const errors = {};

  if (!isNonEmptyString(book.id)) errors.id = "Invalid id";
  if (!isNonEmptyString(book.title)) errors.title = "Invalid title";
  if (!isNonEmptyString(book.category)) errors.category = "Invalid category";
  if (!isValidNumber(book.copies)) errors.copies = "Invalid copies";
  if (!isValidNumber(book.minCopies)) errors.minCopies = "Invalid minCopies";

  if (
    book.expiresAt !== null &&
    !isValidDateString(book.expiresAt)
  ) {
    errors.expiresAt = "Invalid expiresAt";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

function normalizeBook(book) {
  const normalized = {
    ...book,
    id: book.id?.trim(),
    title: book.title?.trim(),
    category: book.category?.trim(),
    copies: Number(book.copies),
    minCopies: Number(book.minCopies),
    expiresAt: book.expiresAt === null ? null : book.expiresAt,
  };

  const validation = validateBook(normalized);
  if (!validation.valid) {
    throw new Error("Normalization failed");
  }

  return normalized;
}

// ---------- 2. Manage Books ----------
function addBook(library, book) {
  const normalized = normalizeBook(book);

  if (library.some(b => b.id === normalized.id)) {
    throw new Error("Book id already exists");
  }

  return [...library, normalized];
}

function removeBook(library, bookId) {
  if (!library.some(b => b.id === bookId)) {
    throw new Error("Book not found");
  }
  return library.filter(b => b.id !== bookId);
}

function updateCopies(library, bookId, delta) {
  return library.map(book => {
    if (book.id !== bookId) return book;

    const newCopies = book.copies + delta;
    if (newCopies < 0) {
      throw new Error("Not enough copies");
    }

    return { ...book, copies: newCopies };
  });
}

// ---------- 3. Low Copies & Expiration ----------
function getLowCopyBooks(library) {
  return library
    .filter(b => b.minCopies > 0 && b.copies < b.minCopies)
    .slice()
    .sort(
      (a, b) =>
        a.copies / a.minCopies - b.copies / b.minCopies
    );
}

function getExpiringBooks(library, daysAhead, today) {
  const todayDate = new Date(today);

  return library.filter(book => {
    if (book.expiresAt === null) return false;
    const exp = new Date(book.expiresAt);
    if (isNaN(exp)) throw new Error("Invalid expiration date");
    const diff = daysBetween(todayDate, exp);
    return diff >= 0 && diff <= daysAhead;
  });
}

// ---------- 4. Purchase List ----------
function generatePurchaseList(library, options) {
  const { daysAhead, today, replacementAmountStrategy } = options;
  const expiring = getExpiringBooks(library, daysAhead, today);
  const low = getLowCopyBooks(library);

  const map = new Map();

  function getReplacementAmount(book) {
    if (replacementAmountStrategy === "useMinCopies") {
      return book.minCopies;
    }
    return 0;
  }

  low.forEach(book => {
    map.set(book.id, {
      title: book.title,
      category: book.category,
      amountToBuy: book.minCopies - book.copies,
      reason: "low_copies",
    });
  });

  expiring.forEach(book => {
    const amount = getReplacementAmount(book);
    if (!map.has(book.id)) {
      map.set(book.id, {
        title: book.title,
        category: book.category,
        amountToBuy: amount,
        reason: "expiring_soon",
      });
    } else {
      const item = map.get(book.id);
      item.amountToBuy = Math.max(item.amountToBuy, amount);
      item.reason = "both";
    }
  });

  return Array.from(map.values()).sort(
    (a, b) =>
      a.category.localeCompare(b.category) ||
      a.title.localeCompare(b.title)
  );
}

// ---------- 5. Search & Summary ----------
function searchBooks(library, query) {
  const q = query.toLowerCase();
  return library
    .filter(
      b =>
        b.title.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    )
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
}

function getLibrarySummary(library) {
  const today = new Date();
  return {
    totalBooks: library.length,
    totalCopies: library.reduce((s, b) => s + b.copies, 0),
    lowCopyCount: getLowCopyBooks(library).length,
    expiringSoonCount: getExpiringBooks(
      library,
      7,
      today.toISOString().slice(0, 10)
    ).length,
  };
}

// ---------- Extra 1: Borrowing ----------
function borrowBook(library, borrows, bookId, borrowerName, date) {
  const book = library.find(b => b.id === bookId);
  if (!book || book.copies === 0) {
    throw new Error("Cannot borrow");
  }

  const borrowId = `borrow-${borrows.length + 1}`;

  return {
    library: updateCopies(library, bookId, -1),
    borrows: [
      ...borrows,
      {
        borrowId,
        bookId,
        borrowerName,
        borrowedAt: date,
        returnedAt: null,
      },
    ],
  };
}

function returnBook(library, borrows, borrowId, date) {
  const record = borrows.find(b => b.borrowId === borrowId);
  if (!record || record.returnedAt !== null) {
    throw new Error("Invalid return");
  }

  return {
    library: updateCopies(library, record.bookId, 1),
    borrows: borrows.map(b =>
      b.borrowId === borrowId
        ? { ...b, returnedAt: date }
        : b
    ),
  };
}

// ---------- Extra 2 ----------
function getOverdueBorrows(borrows, today, maxDays) {
  const todayDate = new Date(today);

  return borrows
    .filter(b => b.returnedAt === null)
    .filter(
      b =>
        daysBetween(new Date(b.borrowedAt), todayDate) >
        maxDays
    )
    .sort(
      (a, b) =>
        daysBetween(new Date(b.borrowedAt), todayDate) -
        daysBetween(new Date(a.borrowedAt), todayDate)
    );
}

// ---------- Extra 3 ----------
function getTopBorrowedBooks(borrows, topN) {
  const counts = {};

  borrows.forEach(b => {
    counts[b.bookId] = (counts[b.bookId] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([bookId, borrowCount]) => ({
      bookId,
      borrowCount,
    }))
    .sort(
      (a, b) =>
        b.borrowCount - a.borrowCount ||
        a.bookId.localeCompare(b.bookId)
    )
    .slice(0, topN);
}

// ---------- Extra 4 ----------
function mergeDuplicates(library) {
  const map = new Map();

  library.forEach(raw => {
    const book = normalizeBook(raw);
    const key = `${book.title.toLowerCase()}|${book.category.toLowerCase()}`;

    if (!map.has(key)) {
      map.set(key, clone(book));
    } else {
      const existing = map.get(key);
      existing.copies += book.copies;
      existing.minCopies = Math.max(existing.minCopies, book.minCopies);

      if (existing.expiresAt === null) {
        existing.expiresAt = book.expiresAt;
      } else if (
        book.expiresAt !== null &&
        new Date(book.expiresAt) < new Date(existing.expiresAt)
      ) {
        existing.expiresAt = book.expiresAt;
      }
    }
  });

  return Array.from(map.values());
}

module.exports = {
  validateBook,
  normalizeBook,
  addBook,
  removeBook,
  updateCopies,
  getLowCopyBooks,
  getExpiringBooks,
  generatePurchaseList,
  searchBooks,
  getLibrarySummary,
  borrowBook,
  returnBook,
  getOverdueBorrows,
  getTopBorrowedBooks,
  mergeDuplicates,
};
