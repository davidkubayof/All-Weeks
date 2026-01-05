import { compare } from "../ctrls/controler.user.js";
import { findOneD } from "../DAL/mysql.db.js";

export async function verifyUserM(req, res, next) {
  try {
    const { body } = req;
    if (!body.username || !body.password) {
      console.log("missing filed username or password");
      return res.status(400).json("missing filed username or password");
    }
    const user = await findOneD(body.username);
    if (!user) return res.status(404).json("user not faund")
    const comper = await compare(body.password, user.password_hash);

    if (comper) {
      next();
    } else {
      res.send("Unauthorized");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("server error ");
  }
}
