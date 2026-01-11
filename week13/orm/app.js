//db
import { Sequelize } from "sequelize";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";

config();

await syncDB();

const sequelize = new Sequelize("courses", "root", "rootpass123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const authenticateConnectionToORM = async () => {
  try {
    const result =  await sequelize.authenticate();
    console.log("Connect to ORM DB");
  } catch (err) {
    console.log("err to connect to db", err);
  }
};
authenticateConnectionToORM();
sequelize.sync();

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connect to ORM DB");
//   })
//   .catch((err) => {
    //     console.log("err to connect to db", err);
    //   });
async function syncDB() {
  try {
    const connection = await createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD
    });
    const [data] = await connection.query(
      "CREATE DATABASE if not exists courses"
    );
    console.log(`Database ${"courses"}`);
  } catch (error) {
    console.log(error);
  }
}
export default sequelize;

import { DataTypes } from "sequelize";

const Course = sequelize.define("Course",{
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
        defaultValue: true
    }
} , { 
    tableName: "courses"
})

await Course.sync()

async function addCourse(newObj){
    const res = await Course.create(newObj)
    console.log(res);    
    console.log(`Added course with id ${res.dataValues.id}`);
    
}
// addCourse({ name: "David" ,hours: 20 , is_active: false})

// export { Course }

async function getActiveCourses(){
    const res = await Course.findAll({
        where: {
           is_active: true     
        }})
    const arr = []
    for(let i=0; i<res.length;i++){
        arr.push(res[i].dataValues);        
    }
    console.log(arr);
    sequelize.close()
}

addCourse({ name:"SQL Basics" , hours:20 , is_active:true })
addCourse({ name:"Python Intro" , hours:30 , is_active:true })
addCourse({ name:"Legacy System" , hours:10 , is_active:false })

getActiveCourses()


