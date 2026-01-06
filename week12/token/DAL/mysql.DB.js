import mysql from '../DB/mysql.db.js'

export async function addOneD(username , password) {
    const [ResultHeader] = await mysql.execute(`INSERT INTO users(username,password_hash) VALUES(?,?)`,[ username , password])
    console.log(ResultHeader);
    
    const [user] = await mysql.execute(`SELECT * FROM users WHERE username LIKE ? `,[`%${username}%`])
    return user
}
export async function findOneD(username) {
    const [user] = await mysql.execute(`SELECT * FROM users WHERE username LIKE ? `,[`%${username}%`])    
    return user[0]
}