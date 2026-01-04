import { validUserS } from "../servisece/users.service.js";

export async function validUserM(req,res,next) {
    try {
        if(!req.headers.username || !req.headers.password){
           return res.status(400).json("not enter username or password:")
        } 
        const user = await validUserS(req.headers)
        
        if(!user){
            return res.status(404).json("user not exsis")    
        }
        next()
    } catch (error) {
        return res.status(500).json(error , "Internal server error");
    }
}


