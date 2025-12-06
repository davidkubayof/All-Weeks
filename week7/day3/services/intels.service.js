import INTELS from "../database/intels.js";
//commant INTELS.splice(currlIndex,1 ,newIntel)

export function addIntek(intel){
    INTELS.push(intel);
    return intel;
}
export function removeIntek(id){
    const index  = INTELS.findIndex(remove => remove.id === id);
    if(index !== -1){
        const deleted = INTELS.splice(index ,1);
        return deleted;
    }
    return null;
}
export function updateIntek(updatedFields,id){
    const index = INTELS.findIndex(item => item.id === id);
    if(index!==-1){
        const oldIntel = INTELS[index]; 
        const newIntel = {...oldIntel, ...updatedFields};
        
        INTELS[index] = newIntel;

        return newIntel;
    }
    return null;
}    
