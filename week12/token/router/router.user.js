import express from 'express'
import { singUpC, userC , decodC } from '../ctrls/controler.user.js'
import { verifyUserM } from '../middl/middlwer.user.js'
import { verifyTokenM } from '../middl/middlwer.token.js'

const router = express.Router()

router.post('/signup', singUpC)
router.post('/verify' , verifyUserM, userC)
router.post('/decode-message' , verifyTokenM , decodC )

export default router