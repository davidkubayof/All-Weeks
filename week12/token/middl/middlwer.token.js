import { verifyToken } from "../utils/utils.middel.js";

export async function verifyTokenM(req, res, next) {
  try {
    const { token } = req.headers;
    if (!token) {
      console.log("token is missing ", token);
      return res.status(400).json(`token is missing `);
    }
    const result = verifyToken(token);
    
    if(result === false) 
        return res.json({ message: "Token expired, please login again" })

    if (result.username) {
        next();
    } else {
        res.status(401).json("Unauthorized");
    }
} catch (error) {
    console.error(error);
    res.status(500).json("server error ");
}
}
