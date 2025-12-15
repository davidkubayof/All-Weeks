import fs from 'fs'

fs.readFile("./test.js","utf-8",(err,date) => {
    if(err)return console.log(err);
    console.log(date)
})