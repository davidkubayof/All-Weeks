import jwt from "jsonwebtoken";

export async function verifyTokenM(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const decoded = jwt.verify(
      token,
      "Fmkqk2OvDv3OpJc4y8b6MBVBA1mZ0dh92B5V2HdjFEAtAtpWfiyUYMWXAlpVc0WG",
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: err });
  }
}
