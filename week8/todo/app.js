import input from "analiza-sync"
import {getInput,delTask,editTask,seetask} from './func.js'

let menu = true;
while(menu){
menu = input(`
    1 see all task
    2 creat task
    3 edit tsak
    4 del task
    5 exit
    `)
switch(menu){
        case "1":
            seetask();
            break
        case "2":
            getInput();
            break
        case "3":
            editTask();
            break
        case "4":
            delTask()
            break
        case "5":
            menu = false
            break
        default:
            console.log("invalid try again: ");                 
        }
    }
