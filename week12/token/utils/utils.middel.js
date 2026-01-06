import jwt from "jsonwebtoken";
import { config } from "dotenv";
import bcrypt from "bcrypt";

config();

export async function hash(password) {
  return await bcrypt.hash(password, 10);
}
export async function compare(password, hash) {
  return await bcrypt.compare(password, hash);
}
export function creatToken(obj) {
  const token = jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
}
export function verifyToken(token) {
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    return result
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return false
    }
    console.error(error);  
  }
}

