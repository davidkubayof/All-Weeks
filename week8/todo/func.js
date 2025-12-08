import { nanoid } from 'nanoid'
import { tasks } from './db.js'
import input from 'analiza-sync'



export function getInput() {
    const name = input("Enter a task name: ");
    const details = input("Enter task details: ");
    const num = input(`Enter a number for status:
1. new
2. work
3. end
> `);

    let status;
    switch (num) {
        case "1":
            status = "new";
            break;
        case "2":
            status = "work";
            break;
        case "3":
            status = "end";
            break;
        default:
            status = "unknown";
            console.log("Invalid status number given.");
    }

    return {name:name,details:details,status:status};
}
export function createTask() {
    const input = getInput()
    const task = {
        name: input.name,
        id: nanoid(),
        creatTime: Date(),
        details:input.details,
        status:input.status
    }
    tasks.push(task)
    return task
}
export function editTask(){
    const editID = input("enter a id to edit: ");
    for(const task of tasks){
        if(task["id"]===editID){
            const input = getInput();
            task.name = input.name
            task.details = input.details
            task.status = input.status
            return
        }
    }
    console.log(`id ${editID} was not found! `)   
    return  
}
export function delTask() {
    const delID = input("enter a delet id: ")
    tasks.every((v, i) => {
        if (v.id == delID) {
            tasks.splice(i, 1)
            return false
        }else { return true }
    })
}
export function newdatefirst(){
    tasks.sort(function(a,b){
                return new Date(b.creatTime) - new Date(a.creatTime);});
            console.log(tasks)
}
export function olddatefirst(){
    tasks.sort(function(a,b){
                return new Date(a.creatTime) - new Date(b.creatTime);});
            console.log(tasks)
}
export function sortbystatus(){
    tasks.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
    console.log(tasks);
}
export function sarechname(){
    const name = input("enter a name task: ");
    for(const task of tasks){
        if(task.name === name){
            console.log(task);   
        }
    }
}
export function seetask(){
    const meno = input(`
        1 date from new to old
        2 date from old to new
        3 status  new / working /end 
        4 sarech of name
        `);
    switch(meno){
        case "1":
            newdatefirst()
            break
        case "2":
            olddatefirst()
            break
        case "3":
            sortbystatus()
            break
        case "4":
            sarechname()
            break
        default:
            console.log("not betwins 0 to 5 or not numbers: ");           
    }
}