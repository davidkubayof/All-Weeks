import { createUserD, deleteUserD, findUserD, getUserD, getUsersD, updateUserD } from "../DAL/users.js";
import jwt from 'jsonwebtoken'

export async function getUser(req, res) {
    const { id } = req.user
    if (!id) { return res.status(400).json('The field id is missing.') }
    const user = await getUserD(id)
    res.json(user)
}
export async function getUsers(req, res) {
    const users = await getUsersD()
    res.json(users)
}
export async function createUser(req, res) {
    const obj = req.body;
    const resulat = await createUserD(obj)
    res.json({ message: 'Creat user successful', resulat })
}
export async function login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await findUserD(username, password);
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });
        const payload = {
            id: user._id,
            username: user.username,
            user_type: user.user_type
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token, user_type: user.user_type });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "server intrnal eroor" })
    }
}
export async function updateUser(req, res) {
    const { id } = req.params;
    const obj = req.body;
    if (!id) { return res.status(400).json('The field id is missing.') }
    const user = await updateUserD(id, obj)
    res.json({ user })
}
export async function deleteUser(req, res) {
    const { id } = req.params;
    if (!id) { return res.status(400).json('The field id is missing.') }
    const user = await deleteUserD(id)
    res.json({ user })
}   