import fs from "fs";
//  1
// function delayedGreet(name, delay) {
//   const res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hello ${name}`);
//     }, delay);
//   });
//   return res;
// }
// delayedGreet("Alice", 2000)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// 2
// function readFileContent(path) {
//   const res = new Promise((resolve, rejects) => {
//     fs.readFile(path, "utf-8", (err, data) => {
//       if (err) rejects(err);
//       resolve(data);
//     });
//   });
//   return res;
// }
// readFileContent("index.html")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//3
// function randomOperation() {
//   const res = new Promise((resolve, rejects) => {
//     const array = ['Success!','Failure!'];
//     const res = array[Math.floor(Math.random() * array.length)]
//     if (res === 'Failure!') rejects(res);
//     resolve(res);
//   });
//   return res;
// }
// randomOperation()
//   .then((data) => console.log(data,"1"))
//   .catch((err) => console.log(err,"2"));
//4
// function raceTimers() {
//   const res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Timer A resolves after 2 seconds `);
//     }, 2000);
//   });
//   const res2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Timer B resolves after 3 seconds `);
//     }, 3000);
//   });
//   Promise.race([res, res2]).then((data) => console.log(data));
// }
// raceTimers();
