import INTELS from "../database/intels.js";
import {addIntek,removeIntek,updateIntek} from "../services/intels.service.js"


export function saveThem(intel){
    return addIntek(intel);  
}
export function returnall(){
    return INTELS.toSorted((a, b) => a.id.localeCompare(b.id));
}

export function deleteThem(id){
    const deleted = removeIntek(id);
    if (!deleted) {
        console.log(`Report with ID ${id} not found.`);
    }
    return deleted;
}

export function updateThem(id, updatedFields){
    const updated = updateIntek(updatedFields, id);
    if (!updated) {
        console.log(`Report with ID ${id} not found.`);
    }
    return updated;
}



