import { creatMessagesD } from "../DAL/messages.mongo.js";

export async function creatMessagesS(obj){
    await creatMessagesD(obj)
}