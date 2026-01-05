import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
const token =  jwt.sign({username: "David" , id:1234}, process.env.JWT_SICRET, {expiresIn: '1h'})
console.log(token);
const res = jwt.verify(token,process.env.JWT_SICRET)
console.log(res);
