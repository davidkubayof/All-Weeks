import { Router } from "express";
import { getMe, loginUserC } from "../controler/controler.user.js";
import { authenticateToken } from "../middlwer/middlwer.token.js";

const router = Router();

router.post('/login', loginUserC)
router.get('/me', authenticateToken , getMe)

export default router;