import {question} from 'readline-sync'
import { listAll , readById , delUser , serchByUaer ,createUser ,updateUser} from './func.js';
 
let bool = true;
while(bool){
    const choice = question(`
        meno
    1. list all user //
    2. creat user 
    3. read user by id//
    4. update user 
    5. del user //
    6. search by user name//
    7. exit //
    entar a num you want: `) 
    switch(choice){
        case "1":
            listAll()
            break
        case "2":
            createUser()
            break
        case "3":
            readById()
            break
        case "4":
            updateUser()
            break
        case "5":
            delUser()
            break
        case "6":
            serchByUaer()
            break
        case "7":
            bool = false
            break
        default:
            console.log(`

not valid! `)
        

    }
}

