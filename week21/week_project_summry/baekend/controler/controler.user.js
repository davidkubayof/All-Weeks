import JWT from 'jsonwebtoken'
import { findOnwD } from '../dal/users.js';
import { comparePassword } from '../utils/utils.js';

export async function loginUserC(req, res) {
    try {
        const { agentCode, password } = req.body;
        if (!agentCode || !password) return res.status(400).json({ message: "missing filed agentCode or password" });

        const dataUser = await findOnwD(agentCode);

        if (!dataUser) return res.status(401).json("user not exsis")

        const comper = await comparePassword(password, dataUser.hashedPassword)

        if (!comper) return res.status(401).json({ message: "Worng pass " });

        const payload = {
            _id: dataUser._id,
            agentCode: dataUser.agentCode,
            fullName: dataUser.fullName,
            role: dataUser.role
        }

        const token = JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        console.log({ token, user: payload });
        res.status(200).json({ token, user: payload })

    } catch (error) {
        console.error(error);
        res.status(500).json({ err: "Server Error " });
    }
}
export async function getMe(req, res) {
    const { agentCode } = req.user
    const user = await findOnwD(agentCode)
    const { id, fullName, role } = user
    console.log({ user: { id, agentCode, fullName, role } });
    res.json({ user: { id, agentCode, fullName, role } })
}
