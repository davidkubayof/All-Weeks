//1
// console.log("start");
// function getUserName(callbake){
//     setTimeout(()=>{
//         const userName =" moshe"
//         callbake(userName);
//     },1000)
// }
// console.log("mid");

// getUserName((name)=>{
//     console.log("user name is:" + name)
// })

// console.log("end");

//2
// function loadScore(callback){
//      setTimeout(()=>{
//         const score = 85
//         callback(score)

//      },1500)

// } 
// loadScore((x)=>{
//     console.log("Loaded score: X: ",x);
//     }
// )
// console.log("end");

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
import fs from 'fs'
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