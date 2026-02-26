import jwt from 'jsonwebtoken'
export function varifyAdminM(req, res, next) {  
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json("mising filed category or message");
    }
    const payload = jwt.verify(token,process.env.PRIVET_JWT)

    

    if( payload.role === "admin"){
        next();
    } else {
        return res.status(401).json("not alowd")
    }
  } catch (error) {
    console.error({error: error})
    res.sendStatus(401)
  }
}
