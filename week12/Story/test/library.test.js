const lib = require("../src/library");

const TODAY = "2026-01-10";

const testLibrary = [
  {
    id: "b1",
    title: "Clean Code",
    category: "Programming",
    copies: 5,
    minCopies: 3,
    expiresAt: null,
  },
  {
    id: "b2",
    title: "History of Rome",
    category: "History",
    copies: 0,
    minCopies: 2,
    expiresAt: TODAY,
  },
  {
    id: "b3",
    title: "JS Basics",
    category: "Programming",
    copies: 1,
    minCopies: 5,
    expiresAt: "2026-01-12",
  },
];

describe("Validation & normalization", () => {
  test("valid book", () => {
    expect(lib.validateBook(testLibrary[0]).valid).toBe(true);
  });

  test("invalid book", () => {
    const res = lib.validateBook({ title: "" });
    expect(res.valid).toBe(false);
  });

  test("normalize trims and converts", () => {
    const book = lib.normalizeBook({
      id: " x ",
      title: " A ",
      category: " B ",
      copies: "2",
      minCopies: "1",
      expiresAt: null,
    });
    expect(book.copies).toBe(2);
  });
});

describe("Book management", () => {
  test("addBook fails on duplicate id", () => {
    expect(() =>
      lib.addBook(testLibrary, testLibrary[0])
    ).toThrow();
  });

  test("removeBook works", () => {
    const result = lib.removeBook(testLibrary, "b1");
    expect(result.length).toBe(2);
  });

  test("updateCopies prevents negative", () => {
    expect(() =>
      lib.updateCopies(testLibrary, "b2", -1)
    ).toThrow();
  });
});

describe("Low copies & expiration", () => {
  test("low copy sorting", () => {
    const low = lib.getLowCopyBooks(testLibrary);
    expect(low[0].id).toBe("b2");
  });

  test("expiring today included", () => {
    const exp = lib.getExpiringBooks(testLibrary, 0, TODAY);
    expect(exp.length).toBe(1);
  });
});

describe("Purchase list", () => {
  test("purchase list logic & sorting", () => {
    const list = lib.generatePurchaseList(testLibrary, {
      daysAhead: 5,
      today: TODAY,
      replacementAmountStrategy: "useMinCopies",
    });
    expect(list[0].category <= list[1].category).toBe(true);
  });
});

describe("Search", () => {
  test("case-insensitive search", () => {
    const res = lib.searchBooks(testLibrary, "program");
    expect(res.length).toBe(2);
  });
});

describe("Borrowing", () => {
  test("borrow and return", () => {
    const { library, borrows } = lib.borrowBook(
      testLibrary,
      [],
      "b1",
      "Alice",
      TODAY
    );
    expect(borrows.length).toBe(1);

    const returned = lib.returnBook(
      library,
      borrows,
      borrows[0].borrowId,
      TODAY
    );
    expect(returned.library.find(b => b.id === "b1").copies).toBe(5);
  });
});
