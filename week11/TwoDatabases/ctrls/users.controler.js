import { creatUserS } from '../servisece/users.service.js'

export async function creatUserC(req,res) {
    try {
        if(!req.body.username || !req.body.password){
           return res.status(400).json("not username or password:")
        }        
        const user = await creatUserS(req.body)
        return res.status(201).json(user)
    } catch (error) {
        console.error(error)
        if(error.message.includes("duplicate")){
            return res.status(409).json(error.message)
        } 
        return res.status(500).json("Internal server error");
    }
}
