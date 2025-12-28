import fs from 'fs/promises'

export async function readUsersFromFile(){
    const data = await fs.readFile('./db/users.json','utf8')
    return JSON.parse(data);
}

export async function saveUsersToFile(newUser){
    try {
        // 1. קריאת הקובץ
        const data = await fs.readFile('./db/users.json', 'utf8');

        // 2. המרה למערך
        const users = JSON.parse(data);

        // 3. הוספה למערך
        users.push(newUser);

        // 4. כתיבה חזרה לקובץ
        await fs.writeFile(
        './db/users.json',
        JSON.stringify(users, null, 2)
        );

        console.log('User added successfully');
    } catch (err) {
        console.error(err);
    }
}
