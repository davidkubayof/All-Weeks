// After all core functions work, you will create a client that requests user input and calls those functions
import input from 'analiza-sync';
import {saveThem} from '../function/func.js'
import { nanoid } from "nanoid";

export function getInput(){
    let terrorisName = input("entar a terrorisName: ");
    
    if(!terrorisName.trim()){
        terrorisName = "Muhammad — unknown last name";
    }
    const weaponsInput = input("Enter weapons (space-separated): ");
    const weapons = weaponsInput.split(" ").filter(w => w.trim() !== "");
    
    const text = input("entar a text: ");

    const report = createReport(terrorisName, weapons, text);
    
    saveThem(report);

    return report;
}


export function createReport(terrorisName,weapons,text){
    return {
        id: nanoid() ,
        terrorisName:terrorisName,
        weapons,
        text:text
    }    
}
