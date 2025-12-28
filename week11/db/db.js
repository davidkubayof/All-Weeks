import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


const pool = mysql.createPool({
    host: process.env.HOST, 
    user: process.env.USER, 
    password: process.env.PASSWORD,
    // database: process.env.database || 'my_database',
    port: 3306
})

const res = await pool.execute('show databases')
console.log(res);

export default pool;



