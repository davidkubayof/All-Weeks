import { question } from "readline-sync"
import { createAgent } from '../models/Agent.js'

export function agentsMenu(user) {
        const lavel = user.lavel
        switch(lavel){
            case "1":
                meno1()
                break
            case "2":
                meno2()
                break
            case "3":
                meno3()
                break
            default:
                console.log("invalid leval: ");
                
        }
}
export function meno1(){
    const num = question(`
    1. creat agent 
    2. show agents
    3. sherch agents by name
    `)
    switch(num){
        case "1":
            createAgent()
            break
        case "2":
            listAgents()
            break
        case "3":
            findAgentByRealName(realName)
            break
        default:
            console.log("invalid num: ");            
    }
}
export function meno2(){
    const num = question(`
    1. creat agent 
    2. show agents
    3. sherch agents by name
    4. sherch agents by code name
    5. chenge status agent
    6. chenge 
    `)
    switch(num){
        case "1":
            createAgent()
            break
        case "2":
            listAgents()
            break
        case "3":
            findAgentByRealName(realName)
            break
        case "4":
            findAgentByCodeName(codeName)
            break
        case "5":
            updateAgentStatus(codeName, newStatus)
            break
        case "6":
            updateAgentArea(codeName, newArea)
            break
        default:
            console.log("invalid num: ");
            


        }
}
export function meno3(){
    const num = question(`
    1. creat agent 
    2. show agents
    3. sherch agents by name
    4. sherch agents by code name
    5. chenge status agent
    6. chenge 
    7. del agent
    `)
    switch(num){
        case "1":
            createAgent()
            break
        case "2":
            listAgents()
            break     
        case "3":
            findAgentByRealName(realName)
            break
        case "4":
            findAgentByCodeName(codeName)
            break
        case "5":
            updateAgentStatus(codeName, newStatus)
            break
        case "6":
            updateAgentArea(codeName, newArea)
            break
        case "7":
            deleteAgent(codeName)
            break
        default:
            console.log("invalid num: ");
            


        }
}