import { readFileByPath, saveDataInFile } from "../utils/utils.js";
import jwt from "jsonwebtoken";

export async function createComplaintsC(req, res) {
  try {
    const { category, message } = req.body;
    if (!category || !message) {
      return res.status(400).json("mising filed category or message");
    }
    const objComplaints = { category, message, createAt: new Date() };
    let data = await readFileByPath("../baekend/src/data/complaints.json");
    if (!Array.isArray(data)) {
      data = [];
    }
    data.push(objComplaints);

    await saveDataInFile("../baekend/src/data/complaints.json", data);
    res.json(objComplaints);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
}
export async function loginC(req, res) {
  try {
    const { password } = req.body;
    if (password === process.env.PASSWORD_ADMIN) {
      const token = jwt.sign({role:"admin"}, process.env.PRIVET_JWT,{
        expiresIn:'1h'
      });
      return res.json({token});
    } else {
      return res.status(401).json({Unauthorized:"Unauthorized"});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
}
export async function returnComplaints(req, res) {
  try {
    const data = await readFileByPath("../baekend/src/data/complaints.json")
    res.json({success:"True" ,data});
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
}
