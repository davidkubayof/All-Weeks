//input user 
import input from 'analiza-sync';
import {getInput} from './client/client.js'
import {returnall} from './function/func.js';
import INTELS from "../day3/database/intels.js";

function play(){
    let bool = true
    while(bool){
        console.log(`  
        1. Add a new intelligence report
        2. Show all reports
        3. Search report by ID
        4. Delete report by ID
        5. Edit report by ID
        0. Exit
        `);
    const choose = Number(input("entar a num(1/2/3/4/5/0):num__ "));

    if(isNaN(choose) ||choose <0 || choose > 5){
        console.log("valid is not num betwin 0/1/2/3/4/5");
        continue;
    } 
    switch (choose) {
        case 1:
            console.log("chooes 1 creat report: ");
            console.log(getInput());
            break   
        case 2:
            console.log("chooes 2 all report: ");
            console.log(returnall());
            break
        case 3:
            const searchID = input("entar a id for search: ");
            const result = INTELS.find(item => item.id === searchID);
            
            if (result) console.log(result);
            else console.log("id is not in data or not valid");
            break
        case 4:
            const deleteID = Number(input("enter ID to delete: "));
            // מציאת אינדקס של הרשומה
            const index = INTELS.findIndex(item => item.id === deleteID);
           
            if (index !== -1) {
            // מחיקה מהמארך
                INTELS.splice(index, 1);
                console.log("Report deleted successfully");
            } else {
                console.log("ID not found — deletion failed");
            }
            break;           
        case 5:
            const editID = input("enter ID to report: ");
            const report  = INTELS.find(item => item.id === editID);
            if (!report) {
                    console.log("ID not found.");
                    break;
                }
            console.log("Current report:", report);
            
            const newDesc = input("Enter new description: ");
                report.description = newDesc;

                console.log("Report updated:", report);
                break;
        case 0:
            console.log("good bay to you your ending print 0");    
            bool = false 
            break       
        }
    }
}

play()

