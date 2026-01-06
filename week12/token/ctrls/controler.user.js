import { addOneD, findOneD } from "../DAL/mysql.db.js";
import { hash } from "../utils/utils.middel.js";

export async function singUpC(req, res) {
  try {
    const { username , password } = req.body;
    
    if (!username || !password) {
      console.log("missing filed username or password");
      return res.status(400).json("missing filed username or password");
    }
    const hashed = await hash(password);
    const addToDB = await addOneD(username, hashed);
    
    res.send(addToDB);

  } catch (error) {
    console.error(error);
    res.status(500).json("server error 500");
  }
}
export async function userC(req, res) {
    res.send("Verified")
}
export function decodC(req, res) {
    const { message } = req.body

    const originalArray = [...message];
    message.sort((a, b) => a - b); // a - b למיון בסדר עולה [5, 6]
    
    if(JSON.stringify(originalArray) === JSON.stringify(message)){
        const sum = message.reduce((partialSum, a) => partialSum + a, 0);
        res.json(`sum of array ${sum}`) 
    } else { 
      res.json("is not tarp -1")}
}