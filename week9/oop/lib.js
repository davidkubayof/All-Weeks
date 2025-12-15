import  fs  from "fs";


// fs.readFileSync("./bb.js","utf-8",(e,date)=>{
//     if(e)return console.log(e);
//     console.log(date);
// })

// console.log("end");

fs.readFile("./b.js","utf-8",(e,date)=>{
    if(e)return console.log(e);
    fs.writeFile("./b2.js" , date, "utf-8" ,()=>{
        fs.writeFile("./b3.js" , date, "utf-8" ,()=>{
            fs.writeFile("./b4.js" , date, "utf-8" ,()=>{
                fs.writeFile("./b5.js" , date, "utf-8" ,()=>{

                })
            })
        })
    })
});

console.log("end");
