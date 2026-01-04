import { ObjectId } from "mongodb";
import { connect } from "../dbConnect.js";

const db = await connect();

export async function findMany() {
    const find = await db.collection("users").find().toArray()
    return find;
}
export async function addOne(data) {
    const insertOne = await db.collection("users").insertOne(data)
    return insertOne;
}    
export async function updateOne(_id) {
    const findOneAndReplace = await db.collection("users").findOneAndUpdate({_id: new ObjectId(_id)},{$set: {confirmed: true} })
    const updated = await db.collection("users").findOne({_id: new ObjectId(_id)})
    return updated;
}    
export async function deletOne(_id) {
    const findOneAndDelete = await db.collection("users").findOneAndDelete({_id: new ObjectId(_id)})    
    return findOneAndDelete;
}    
export async function eqOrBigerD() {
const findOneAndDelete = await db.collection("users").find({threatLevel:{$gte:4}}).toArray()
    return findOneAndDelete;
}    
export async function findOneD(_id) {
    const find = await db.collection("users").findOne({_id: new ObjectId(_id)})
    return find;
}