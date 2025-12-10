import { agents } from "../database/agentsDB.js";

export function listAgents(areaFilter = null, statusFilter = null) {
    // הצגת סוכנים עם אפשרות סינון
}

export function findAgentByRealName(realName) {
    // חיפוש לפי שם אמיתי
}

export function findAgentByCodeName(codeName) {
    // חיפוש לפי שם קוד
}

export function deleteAgent(codeName){
    for(const obj of agents){
        if(obj.codeName===codeName){
            
        }
    }
    // מחיקת סוכן
}

export function updateAgentStatus(codeName, newStatus) {
    // שינוי סטטוס
}

export function updateAgentArea(codeName, newArea) {
    // שינוי גזרת פעילות
}
