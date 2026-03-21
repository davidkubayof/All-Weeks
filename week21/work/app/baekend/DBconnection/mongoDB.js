import { MongoClient, Db } from 'mongodb'
import { config } from 'dotenv'
config()

const client = new MongoClient(process.env.DB_CONNECTION)

/**
 * @type { Db | null }
 */
let db = null;

/**
 * @returns { promises<Db>}
 */
export async function connect() {
    try {
        if(!db){
            await client.connect();
            db = client.db('launchers')
            console.log(`Connect to Mongo db`);
        }
        return db
    } catch (error) {
        console.error(error)       
    }
}
