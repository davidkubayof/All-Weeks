import { nanoid } from 'nanoid'
import db from './db.js'
import {question} from 'readline-sync'

//show all user in db
export function listAll(){
        console.table(db.users)
}
//Create user
export function createUser(){
    const username = question(`enter a username: `)
    const role = question(`enter rool: `)
    
    const obj = {
        id: nanoid(36),
        username:username,
        role:role
    }
    db.users.push(obj)
    db.lastUpdate = new Date()
    console.log("User created! ",db.lastUpdate);
}
//Read user by ID
export function readById(){
    const id = question("enter a id: ")
    for(const user of db.users){
        if(id===user.id){
        console.table(user);
        return
        }
    }
    console.log(`not faund: `)
    return
}
//Update user
export function updateUser(){
    const id = question(``)
    
    for(const user of db.users){
        if(id===user.id){
            const newUsername = question(`enter new username (Enter to skip): `);
            const newRole = question(`enter new role (Enter to skip): `);

            if (newUsername) user.username = newUsername;
            if (newRole) user.role = newRole;
            console.log("Last update:", db.lastUpdate);
            console.log("User updated.");
            return;
        }
    }
}
//del user 
export function delUser(){
    const id = question(`enter a id to del: `)
    
    for(const user of db.users){
        if(id===user.id){
            const index = db.users.indexOf(user);
            const y_or_n = question("Confirm deletion (Y/N):")
            
            if(y_or_n === "y"||y_or_n==="Y"){
                db.users.splice(index,1);
                db.lastUpdate = new Date()   
                console.log("User deleted: ",db.lastUpdate);
                }
        return
        }

    }
    console.log("User not found.");
}
//Search by username
export function serchByUaer(){
    const username = question(`enter a name to find Uaer: `)
    for(const arrobj of db.users){
        if(arrobj.username=== username){
            console.table(arrobj);
        }
    }
}

