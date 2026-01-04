import { creatUserS , getAllUsersS , eqOrBigerS , updatUserS ,  deletUserS , getByIdS } from "../servisece/creatUserS.js";

export async function creatUserC(req, res) {
  try {
    const body = req.body;
    if (!body) {
      return res.status(400).send("post body canot be empty");
    }
    const result = await creatUserS(body);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
}
export async function getAllUsersC(req, res) {
    try {
        const result = await getAllUsersS();
        res.send(result);
    } catch (error) {
        console.error(error);
    }
}
export async function eqOrBigerC(req, res) {
  try {
      const result = await eqOrBigerS();
      res.send(result);
  } catch (error) {
    console.error(error);
  }
}
export async function updatUserC(req, res) {
  try {
      const result = await updatUserS(req.params.id);
      res.send(result);
  } catch (error) {
    console.error(error);
  }
}
export async function deletUserC(req, res) {
  try {
      const result = await deletUserS(req.params.id);
      res.send(result);
  } catch (error) {
    console.error(error);
  }
}
export async function getByIdC(req, res) {
    try {
        const result = await getByIdS(req.params.id);
        res.send(result);
    } catch (error) {
        console.error(error);
    }
}