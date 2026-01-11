//db
import { Sequelize } from "sequelize";
import { createConnection } from "mysql2/promise"; 
import { config } from "dotenv";
config()
await syncDB()
const sequelize = new Sequelize("courses","root","rootpass123", {
    dialect: "mysql",
    host: "localhost",
    logging: false
})
sequelize.authenticate().then(()=>{
    console.log("Connect to DB");
}).catch(err=>{
    console.log("err to connect to db", err);
})
sequelize.sync()
async function syncDB() {
    try {
        const connection = await createConnection({
            host:process.env.HOST,
            user:process.env.USER,
            password:process.env.PASSWORD
        })
        const [data] = await connection.query("CREATE DATABASE if not exists courses")
        console.log(`Database ${"courses"}`);
    } catch (error) {
        console.log(error);
    }
}
export default sequelize;

import { DataTypes } from "sequelize";
import sequelize from "../DAL/DB.js";

const Product = sequelize.define("Course",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    hours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_active: {
        type:DataTypes.BOOLEAN,
    }
} , { 
    tableName: "courses",
})

await Product.sync()

export { Product }

const res = await Product.create({ name: "yiyooi" ,hours:"testing", is_active: ""})
console.log(res);
