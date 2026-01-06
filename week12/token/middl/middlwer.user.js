import { findOneD } from "../DAL/mysql.db.js";
import { creatToken, compare } from "../utils/utils.middel.js";

export async function verifyUserM(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      console.log("missing filed username or password");
      return res.status(400).json("missing filed username or password");
    }
    const user = await findOneD(username);
    if (!user) return res.status(404).json("user not faund");
    const comper = await compare(password, user.password_hash);

    if (comper) {
      const token = creatToken({ username });
      console.log("token: ", token);
      res.setHeader("token", token);

      next();
    } else {
      res.status(401).json("Unauthorized");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("server error ");
  }
}
