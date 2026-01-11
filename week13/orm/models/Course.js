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
