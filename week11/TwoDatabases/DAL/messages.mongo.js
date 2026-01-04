import { ObjectId } from "bson";
import { connect } from "../DB/mongo.dbConnect.js";

const db = await connect()

export async function creatMessagesD({userId,username,content}) {
    const obj = {
        userId,
        username,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    db.collection("messages").insertOne(obj)
}

const deleteByIdC = async(id, username)=>{
    const deleting = db.collection("messages").deleteOne({$and:[{_id:ObjectId(id)},{username:username}]})
}
 deleteByIdC("695546c66e5049a86d136164","1")