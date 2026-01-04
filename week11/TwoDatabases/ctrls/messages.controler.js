import { creatMessagesS } from "../servisece/messages.service.js";

export async function creatMessagesC(req ,res) {
    try {
        if(!req.body.userId || !req.body.username || req.body.content){
            return res.send(" missing details")    
        }
        
        const messages =  await creatMessagesS(req.body)
        res.json(messages)
        
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}