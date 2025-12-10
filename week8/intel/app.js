import { question } from "readline-sync";
import {users} from './database/usersDB.js'
import { agentsMenu } from "./ui/menu.js";

function main() {
    let bool = true
    while(bool){
        const getuser = question("enter user ") 
        const password = question("enter password ") 
        for(const user of users){
            if(user.username===getuser && user.password===password){
                bool = false
                agentsMenu(user)
            }
        }
    }
}
main();

