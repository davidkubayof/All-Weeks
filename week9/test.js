const readline = require("readline");

const BASE_URL = "https://jsonplaceholder.typicode.com";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function fetchJSON(url) {
  const res = await fetch(url);
  return res.json();
}

/* -------- ACTION 1 -------- */
async function topAuthors() {
  const posts = await fetchJSON(`${BASE_URL}/posts`);
  const users = await fetchJSON(`${BASE_URL}/users`);

  const countMap = {};
  posts.forEach((p) => {
    countMap[p.userId] = (countMap[p.userId] || 0) + 1;
  });

  const result = Object.entries(countMap)
    .map(([userId, count]) => {
      const user = users.find((u) => u.id == userId);
      return { name: user.name, posts: count };
    })
    .sort((a, b) => b.posts - a.posts)
    .slice(0, 3);

  console.log("\n🏆 Top 3 Authors:");
  result.forEach((u, i) =>
    console.log(`${i + 1}. ${u.name} – ${u.posts} posts`)
  );
}

/* -------- ACTION 2 -------- */
async function userProfile() {
  const id = await ask("Enter user ID (1–10): ");

  const [user, posts, todos] = await Promise.all([
    fetchJSON(`${BASE_URL}/users/${id}`),
    fetchJSON(`${BASE_URL}/posts?userId=${id}`),
    fetchJSON(`${BASE_URL}/todos?userId=${id}`),
  ]);

  const completed = todos.filter((t) => t.completed).length;
  const percent = ((completed / todos.length) * 100).toFixed(1);

  console.log(`
👤 ${user.name}
📧 ${user.email}
📝 Posts: ${posts.length}
✅ Todos: ${completed}/${todos.length} (${percent}%)
`);
}

/* -------- ACTION 3 -------- */
async function searchPosts() {
  const keyword = await ask("Keyword: ");
  const posts = await fetchJSON(`${BASE_URL}/posts`);

  const filtered = posts.filter(
    (p) =>
      p.title.includes(keyword) || p.body.includes(keyword)
  );

  const results = await Promise.all(
    filtered.map(async (p) => {
      const comments = await fetchJSON(
        `${BASE_URL}/comments?postId=${p.id}`
      );
      return { title: p.title, comments: comments.length };
    })
  );

  results
    .sort((a, b) => b.comments - a.comments)
    .slice(0, 5)
    .forEach((p, i) =>
      console.log(`${i + 1}. (${p.comments} comments) ${p.title}`)
    );
}

/* -------- ACTION 4 -------- */
async function suspiciousUsers() {
  const users = await fetchJSON(`${BASE_URL}/users`);

  console.log("\n🚨 Suspicious Users:");
  for (const user of users) {
    const todos = await fetchJSON(
      `${BASE_URL}/todos?userId=${user.id}`
    );
    if (todos.length > 10) {
      const completed = todos.filter((t) => t.completed).length;
      const percent = (completed / todos.length) * 100;
      if (percent < 30) {
        console.log(
          `${user.name} (${user.email}) – ${percent.toFixed(1)}% completed`
        );
      }
    }
  }
}

/* -------- ACTION 5 -------- */
async function compareUsers() {
  const a = await ask("User A ID: ");
  const b = await ask("User B ID: ");

  async function scoreUser(id) {
    const posts = await fetchJSON(`${BASE_URL}/posts?userId=${id}`);
    const todos = await fetchJSON(`${BASE_URL}/todos?userId=${id}`);

    let commentsCount = 0;
    for (const p of posts) {
      const comments = await fetchJSON(
        `${BASE_URL}/comments?postId=${p.id}`
      );
      commentsCount += comments.length;
    }

    const score = posts.length * 2 + todos.length + commentsCount * 0.5;
    return { posts: posts.length, todos: todos.length, commentsCount, score };
  }

  const A = await scoreUser(a);
  const B = await scoreUser(b);

  console.log("\n📊 Comparison:");
  console.log("User A:", A);
  console.log("User B:", B);

  console.log(
    `\n🏆 Busier user: ${
      A.score > B.score ? "User A" : "User B"
    }`
  );
}

/* -------- MENU -------- */
async function menu() {
  console.log(`
1. Top authors by posts
2. User profile + todos
3. Search posts by keyword
4. Detect suspicious users
5. Compare two users
0. Exit
`);
  const choice = await ask("Choose: ");

  switch (choice) {
    case "1":
      await topAuthors();
      break;
    case "2":
      await userProfile();
      break;
    case "3":
      await searchPosts();
      break;
    case "4":
      await suspiciousUsers();
      break;
    case "5":
      await compareUsers();
      break;
    case "0":
      rl.close();
      return;
  }
  menu();
}

menu();
