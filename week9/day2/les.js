// async function getName(){
//         return "Moshe"
// }

// async function printname(name){
//     return name + "Print";
    
// }
// const name = await getName();
// const pName = await printname(name)
// console.log(pName);

import fs from 'fs'

const fsPro = fs.promises;
const fileDate = await fsPro.readFile('./promise.js',"utf-8");
console.log(fileDate);
