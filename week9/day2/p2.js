// //1
// async function waitForHello() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from promise");
//     }, 500);
//   });
//   return promise
// }
// const result = await waitForHello();
// console.log(result);

//2
// async function doubleAsync(n){
//     const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(n*2);
//     }, 600);
//   })
//   return promise
// }
// async function run(){
//     const result = await doubleAsync(2);
//     console.log("result is x", result);
// }
// run()

//3
// async function fetchUser(){
//     const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Dana" });
//     }, 1000);
//   })
//   return promise
// }
// const result = await fetchUser();
// console.log("user name :",result.name);

//4
// function validateAge(age){
//     return new Promise((resolve,reject) => {
//         if(age>=18){
//             resolve("old: ")
//         }
//         else{ 
//             reject("Too young: ")
//         }      
//     }) 
// }
// async function checkAge() {
//   try {
//     const resolt = await validateAge(19);
//     console.log(resolt);
     
//   } catch (error) {
//     console.log(error);
//   }
// }

// checkAge();

//5
// async function getNumber(){
//    const p =  new Promise((resolve,reject) => {
//         setTimeout(() => {
//         resolve(3)
//         }, 400);
//     }) 
// }
// async function square(n){

// }

// async function checkAge() {
//   try {
//       const r1 = await getNumber();
//       const r2 = await square(2);
     
//   } catch (error) {
//     console.log(error);
//   }
// }

// checkAge();

