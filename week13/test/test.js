const url = "http://51.84.55.29/mod/assign/view.php?id=847";
const response = await fetch(url, {
  method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "avi avi",
//     email: "avi@gmail.com",
//     password: "1111",
//     role: "commander",
//   }),
});
// const result = await response.json();
console.log(response);
