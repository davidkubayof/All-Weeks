import express from "express";
// import { config } from "dotenv";


const app = express();


import { MongoClient } from "mongodb";
import {config} from 'dotenv'
config()

const client = new MongoClient('mongodb+srv://davidkobyof_db_users:uZytc3ljwPsCS3il@cluster0.nafjpmh.mongodb.net/?appName=Cluster0') 
await client.connect()
export const db = client.db("ToDoLists")
console.log(db.collection('jj').insertOne({jj:"להלרחקר'"}));

// config();
app.use(express.json());





app.listen(3000, () => {
  // console.log(`server run on ${process.env.PORT}`);
});
