import { ObjectId } from 'mongodb';
import { connect } from '../DBconnection/mongoDB.js'

const db = await connect()

export async function getUserD(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    return await db.collection('users').findOne({ _id: new ObjectId(id) });
}
export async function getUsersD() {
    return await db.collection('users').find().toArray();
}
export async function createUserD(obj) {
    return await db.collection('users').insertOne(obj);
}
export async function findUserD(username, password) {
    return await db.collection('users').findOne({ username, password });
}
export async function updateUserD(id, obj) {
    obj.last_login = new Date()
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    return await collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { obj } });
}
export async function deleteUserD(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    return await db.collection('users').deleteOne({ _id: new ObjectId(id) });
}
