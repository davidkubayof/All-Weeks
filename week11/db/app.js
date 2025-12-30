import { question } from "readline-sync"
import { getAll , creatTable , updatTable , delTable } from './DAL/users.js'


let bool = true;
while(bool){
    const choues = question(`
        meno:
        1. getAll
        2. creatTable
        3. updatTable
        4. delTable
        5. exit
        enter a num fo meno: `)
    switch(choues){
        case "1":
            console.log(`you are choes getAll:`)
            await getAll()
            break
        case "2":
            console.log(`you are choes creatTable:`)
            await creatTable()
            break 
        case "3":
            console.log(`you are choes updatTable:`)
            await updatTable()
            break
        case "4":
            console.log(`you are choes delTable:`)
            await delTable()
            break
        case "5":
            console.log(`you are choes exit:`)
            bool = false
            break
        default:
            console.log(`\nnot betwin 1 to 5`)
    }
}
