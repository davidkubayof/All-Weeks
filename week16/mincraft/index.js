// import { add } from "./add.js";

// const rowsNumber = 30;
// const colsNumber = 100;

// for (let row = 1; row <= rowsNumber; row++) {
//   for (let colnum = 1; colnum <= colsNumber; colnum++) {
//     const block = document.createElement("div");
//     block.classList.add("cell");

//     add(row, colnum, block);
//     add(`${row}`, `${colnum - 15}`, block);

//     if (row >= 11 && row < 12) {
//       block.classList.add("grass5");
//     } else if (row > 11 && row < 16) {
//       block.classList.add("ground");
//     } else if (row > 15 && row < 29) {
//       block.classList.add("stone");
//     } else if (row > 28 && row < 31) {
//       block.classList.add("bedrock");
//     }
//     document.body.appendChild(block);
//   }
// }

// const sideBar = document.createElement("div");
// sideBar.classList.add("side-bar");
// document.body.append(sideBar);
// ["diamond-pickaxe", "diamond-axe", "diamond-shovel", "shears"].forEach(
//   (className) => {
//     const tool = document.createElement("div");
//     tool.classList.add("tool");
//     tool.classList.add(className);
//     sideBar.append(tool);
//   },
// );
// // const IMG = document.createElement("div");
// // IMG.classList.add("cursor-img");
// // document.body.append(IMG);
// // ["img1"].forEach((className) => {
// //   const img2 = document.createElement("img");
// //   img2.classList.add();
// //   img2.classList.add();
// //   IMG.append();
// // });

// // const cursor = document.querySelector(".cursor");
// // document.addEventListener("mousemove", (event) => {
// //   const { width, height } = cursor.getBoundingClientRect();
// //   cursor.style.left = `${event.clientX - width / 2}px`;
// //   cursor.style.top = `${event.clientX - height / 2}px`;
// // });
// //<div class="img-grass5"></div>

// // const onclik = document.querySelector(".img-grass5")

// export const obj = {
//   count:0,
// }
// document.body.addEventListener("click", (event) => {
//   const { target } = event;
//   if (target.classList.contains("grass5")){
//     target.classList.replace("grass5", "sky");
//     obj.count += 1;
//   }
//   if (target.classList.contains("ground"))
//     target.classList.replace("ground", "sky");
//   if (target.classList.contains("stone"))
//     target.classList.replace("stone", "sky");
//   if (target.classList.contains("leaves1"))
//     target.classList.replace("leaves1", "sky");
//   if (target.classList.contains("soil1"))
//     target.classList.replace("soil1", "sky");
// });


// // const img = document.createElement("div");
// // img.classList("img-grass5");
// // img.textContent = `${"gerwqkahjpoihrwa"}`
// // document.body.append(img)
