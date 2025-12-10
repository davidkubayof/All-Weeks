import input from "analiza-sync"
import db from './db.js'


export function first_p_x(){
    const index = Number(input("enter a index: "));
    return index
    // ifampty(first_p_x,index,"X");
    // ifwin()
    
}
export function first_p_o(){
    const index = Number(input("enter a index: "));
    ifampty(first_p_o,index,"O");
    ifwin()

}
export function ifampty(index,val){
    if(db[index]===""){
        db[index] = val;
        console.log(db)
    }
    else{console.log("invalid or choice")}
}





// export function ifwin(){
//     const arrwin = [[0,1,2],[0,4,8],[0,3,6],[2,5,8],[2,4,6],[3,4,5],[6,7,8],[1,4,7]];
//     for(let i=0;i<arrwin.length; i++){
//         if(arrwin[i]===)
//             console.log(arrwin[i])

//        } 
//    }


// ifwin()

first_p_x()