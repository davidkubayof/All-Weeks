import { findOnwD, insertOnwD, readAllD } from "../dal/users.js";
import { hashPassword } from "../utils/utils.js";

export async function craeteUserC(req, res) {
    try {
        const { agentCode, fullName, role, password } = req.body
        if (!agentCode || !fullName || !role || !password) {
            return res.status(400).json({
                message: "agentCode, fullName and role and password are required"
            })
        }
        const dataUsers = await findOnwD(agentCode);
        if (dataUsers) return res.status(409).json({ massage: "User is alrday in db" })
        
        const hashedPassword = await hashPassword(password)

        const user = {
            agentCode,
            fullName,
            role,
            hashedPassword,
        }
        const resulat = await insertOnwD(user);
        return res.status(201).json({ user })

    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Server error" })
    }
}
export async function getUsersC(req, res) {
    try {
        const dataUsers = await readAllD();
        res.status(200).json({ users: dataUsers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
