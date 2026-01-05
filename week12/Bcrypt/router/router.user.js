import express from 'express'
import { singUpC, userC , decodC } from '../ctrls/controler.user.js'
import { verifyUserM } from '../middl/middlwer.user.js'

const router = express.Router()

router.post('/signup', singUpC)
router.post('/verify' , verifyUserM, userC)
router.post('/decode-message' ,verifyUserM ,decodC)

export default router