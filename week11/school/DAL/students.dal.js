import connection from '../db.js'

export async function readAllD(){
        const [rows] = await connection.execute(`SELECT * FROM students`) 
        return rows
}

export async function insertOne(student){
        const {name,age,className} = student
        const [data] = await connection.execute("INSERT INTO students(`name`, `age`, `className`) VALUES (?,?,?)",[name,age,className])
        const [newStudent] = await connection.execute("SELECT * FROM students WHERE id = ?", [data.insertId]);
        return newStudent;
}

export async function readById(id){
    const [Student] = await connection.execute("SELECT * FROM students WHERE id = ?", [id]);
    return Student;
}
export async function updatOne(){
}
export async function delOne(){
}