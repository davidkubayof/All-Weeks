import express from 'express'
import { creatUserC } from '../ctrls/users.controler.js';
import { validUserM } from '../middleware/middlewareUser.js';

const router = express.Router();

router.post('/register', creatUserC)
router.post('/login', validUserM ,(req , res )=>{return res.json("success to login")})

export default router;