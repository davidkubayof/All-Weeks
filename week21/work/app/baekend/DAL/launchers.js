import { ObjectId } from 'mongodb';
import { connect } from '../DBconnection/mongoDB.js'

const db = await connect()

export async function getLaunchersD() {
    const launchers = await db.collection('launchers').find().toArray();
    return launchers;
}
export async function getLauncherD(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    return await db.collection('launchers').findOne({ _id: new ObjectId(id) });
}
export async function createLauncherD(obj) {
    return await db.collection('launchers').insertOne( obj );
}
export async function updateLauncherD(id, obj) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    return await collection('launchers').updateOne({ _id: new ObjectId(id) }, { $set: { obj } });
}
export async function deleteLauncherD(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    return await db.collection('launchers').deleteOne({ _id: new ObjectId(id)});
}
