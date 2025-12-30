import pool from '../db.js'

export async function getAll(){
    try {
        console.log("eeeee");
        
        const [rows] = await pool.execute(`SELECT * FROM test1`) 
        console.log(rows, "ghfdhgfgfrjhytuytku");
        
    } catch (error) {
        console.error(error, "bb")
        
    }
}
export async function creatTable(){
    try {
        
    } catch (error) {
        console.error(error)
        
    }
}
export async function updatTable(){
    try {
        
    } catch (error) {
        console.error(error)
        
    }
}
export async function delTable(){
    try {
        
    } catch (error) {
        console.error(error)
        
    }
}