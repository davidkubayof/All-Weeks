import { connect } from '../DB/mongo.dbConnect.js';

const db = await connect();

export async function readAllD() {
    const users = await db.collection("users").find().toArray();
    return users
}
export async function insertOnwD(data) {
    const users = await db.collection("users").insertOne(data);
    console.log(users);
    
    return users
}
export async function findOnwD(agentCode) {
    const users = await db.collection("users").findOne({agentCode});
    return users
}