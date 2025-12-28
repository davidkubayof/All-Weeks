import { rejects } from 'assert';
import fs from 'fs'
import { resolve } from 'path';
//3.1
// function getHello(){
//     const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Hello")
//         },500)
//     })
//     return p
// }

// const promis = getHello()

// promis.then((date)=>{
//     console.log(`date: ${date}`);
    
// }).catch((err)=>{
//     console.log(`err: ${err}`);
    
// })

//3.2
// function addAsync(a, b){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(a+b)
//             },1000)
//     })
//     return p
// }
// const sum = addAsync(5,7);
// sum.then((date)=>{
//   console.log(`date: ${date}`);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.3
// function checkNumber(n){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(n%2===0)resolve("is even: ")
//             reject("is not even: ")
//             },800)
//     })
//     return p
// }
// const num = checkNumber(6);
// num.then((date)=>{
//   console.log(`date: ${date}`);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.4
// function login(username, password){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(username==="admin"&&password==="1234")resolve("Login successful: ")
//             reject("Invalid credentials: ")
//             },1200)
//     })
//     return p
// }
// const enter = login("admin", "1234");
// enter.then((date)=>{
//   console.log(`date: ${date}`);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.5
// function getNumbers(){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve([1,2,3,4,5])
//             },700)
//     })
//     return p
// }
// const arr = getNumbers();
// arr.then((date)=>{
//     for(const d of date){
//             console.log(`date: ${d}`)}
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.6
// function unstableOperation(){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()<0.5)resolve("Success: ")
//             reject("Random failure")
//             },1000)
    
//     })
//     return p
// }
// const un = unstableOperation()
// un.then((date)=>{
//   console.log(`date: ${date}`);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.7
// function getUser(){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({name: "Dana", age: 16 })
//             },600)
    
//     })
//     return p
// }
// const user = getUser()

// user.then((date)=>{
//   console.log("date: ",date);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.8
// function squarePositive(n){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(n>=0)resolve(n*n)
//             reject("Negative number not allowed")
//             },500)
    
//     })
//     return p
// }
// const user = squarePositive(3)

// user.then((date)=>{
//   console.log("date: ",date);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.9
// function waitTwoSeconds(){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Done waiting")
//             },2000)
//     })
//     return p
// }
// const user = waitTwoSeconds()

// user.then((date)=>{
//   console.log("date: ",date);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//3.10
// function downloadFile(url){
//     const p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(url.startsWith("http"))resolve("Downloaded from URL")
//                 reject("Invalid URL")

//             },1500)
//     })
//     return p
// }
// const user = downloadFile("https://www.w3schools.com/")

// user.then((date)=>{
//   console.log("date: ",date);
// })
// .catch((err)=>{
//     console.log(`err: ${err}`)
// })

//4.1
// function getUserName(){
//     const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Dana")
//     },1000)})
//     return p
// }

// const user = getUserName()
// user.then((name)=>{
//     console.log("user name is: " + name)
// })
// .catch((err)=>{
//     console.log("err: ",err)}
// )


//4.2
// function loadScore(){
//     const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(85)
//     },1500)})
//     return p
// } 
// const load = loadScore()
// load.then((score)=>{
//     console.log("user name is: " , score)
// })
// .catch((err)=>{
//     console.log("err: ",err)}
// )

//================================================================
/////////////////////////////////////////////////////////////////
//================================================================
//3
// function  checkLogin(callback){
//     setTimeout(()=>{
//         const isLoggedIn = true
//         callback(isLoggedIn)

//     },2000)
// }
// checkLogin((bool)=>{
//     if(bool===true){
//         console.log(`user is logged in : `)
//     }
//     else if(bool===false){
//         console.log(`user is not logged in : `);        
//     }
// })

//4
// function getProductPrice(productId, callback){
//     setTimeout(()=>{
//         const price = 99.9 
//         callback(productId, price) 
//     },1200)

// }
// console.log("Requesting product price...");

// getProductPrice(123,(productId,price)=>{console.log(`price for prodact ${productId} is: ,${price}`);
// })

//5
// function loadConfig(callback){
//     setTimeout(()=>{
//     const config ={
//         env:"dev",
//         debug: true
//     }
//     callback(config)
//     },500)
// }
// loadConfig((obj)=>{console.log("config loaded:",obj);})

//6
// function addAsync(a, b, callback){
//     setTimeout(()=>{
//     const sum = a+b
//     callback(sum)
//     },1000)
// }
    
// addAsync(5,7,(sum)=>{console.log(`sum is 12 ${sum}`)})

//7
// function getFirstAsync(array, callback){
//     setTimeout(()=>{
//         const elemnt = array[0]
//         callback(elemnt)
//     },700)
// }
// getFirstAsync(["a","b","c"],(elemnt)=>{console.log("first: a", elemnt);
// })

//8
// function isEvenAsync(number, callback){
//     setTimeout(()=>{
//         if(number%2===0){
//             callback(true)
//         }else if(!number%2===0){
//             callback(false)
//         }
//     },800)

// }
// isEvenAsync(5,(bool)=>{console.log(bool);
// })

//9
// function downloadFile(url, callback){
//     setTimeout(()=>{
//         console.log(`Downloading from: URL `);
//         callback(url,"Download finished: ")
//     },1500)

// }
// downloadFile("http://example.com/file",(url,down)=>{console.log(url , down)})

//10
// function  doubleAsync(value, callback){
//     setTimeout(()=>{
//         const res = value * 2
//         callback(res)
//     },300)
// }
// doubleAsync(10,(res)=>{console.log("res :20 is",res)})

//11
// const date = "Hello from async writeFile"
// fs.writeFile('./note.txt',date,(e)=>{
//     if(e)return console.log(e);
//     console.log( "File written successfully")
// })

//12
// fs.readFile('note.txt', 'utf8', (err, data) => {
//   if (err) {
//     // On error, print an error message and the error object
//     console.error("Error reading file:", err);
//   } else {
//     // On success, print the file contents
//     console.log("Content:", data);
//   }
// });

//13
// fs.appendFile("note.txt", "\nNew line added",(err,data)=>{
//     if(err){console.log(err)}
//     else{console.log("Line appended");}
// })

//14
// fs.mkdir("logs",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Directory 'logs' created") 
// })
