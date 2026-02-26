// import { config } from 'dotenv';
// import { MongoClient, Db } from 'mongodb';

// config();

// const client = new MongoClient('mongodb+srv://davidkobyof_db_users:uZytc3ljwPsCS3il@cluster0.nafjpmh.mongodb.net/');
// // mongodb+srv://david:S4XebvvUMbfFJPy9@cluster0.nafjpmh.mongodb.net/
// /**
//  * @type {Db | null}
//  */
// let db = null;

// /**
//  * @returns {Promise<Db>}
//  */
// export async function connect() {
//     try {
//         if (!db) {
//             await client.connect();
//             db = client.db("start_mongo");
//             console.log("Connected to MongoDB");
//         }
//         return db;
//     } catch (err) {
//         console.error(err);
//     }
// }




// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://davidkobyof_db_users:uZytc3ljwPsCS3il@cluster0.nafjpmh.mongodb.net/";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     console.log("hggggh");
    
//     // Send a ping to confirm a successful connection
//     await client.db("dudu").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// import { MongoClient } from "mongodb";
// import {config} from 'dotenv'
// config()

// const client = new MongoClient('mongodb+srv://davidkobyof_db_users:uZytc3ljwPsCS3il@cluster0.nafjpmh.mongodb.net/?appName=Cluster0') 
// await client.connect()
// export const db = client.db("ToDoLists")