import bcrypt from "bcrypt";
import { addOneD, findOneD } from "../DAL/mysql.db.js";

export async function singUpC(req, res) {
  try {
    const { body } = req;
    if (!body.username || !body.password) {
      console.log("missing filed username or password");
      return res.status(400).json("missing filed username or password");
    }
    const hashed = await hash(body.password);
    const addToDB = await addOneD(body.username, hashed);
    res.send(addToDB);

  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
}
export async function userC(req, res) {
    res.send("Verified")
}
export async function decodC(req, res) {
    const {body} = req

    const originalArray = [...body.message];
    body.message.sort((a, b) => a - b); // a - b למיון בסדר עולה [5, 6]
    

    if(JSON.stringify(originalArray) === JSON.stringify(body.message)){
        const sum = body.message.reduce((partialSum, a) => partialSum + a, 0);
        console.log(sum) 
    }



}
export async function hash(password) {
  return await bcrypt.hash(password, 10);
}
export async function compare(password , hash) {
    return await bcrypt.compare(password , hash)
}
