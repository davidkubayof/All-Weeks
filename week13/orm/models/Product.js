import { DataTypes } from "sequelize";
import sequelize from "../a.js";

const Product = sequelize.define("Product",{
    price:{
        type:DataTypes.INTEGER
    },
    description: {
        type:DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
} , { 
    tableName: "products",
    timestamps: false
})
await Product.sync()
export { Product }

const res = await Product.create({price: 100, description: "yiyooi" ,title:"testing"})
console.log(res);
