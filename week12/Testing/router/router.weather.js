import express from 'express'
import { isSafeToHikeC } from '../ctrls/controler.weather.js'

const router = express.Router()

router.post('/check-weather',  isSafeToHikeC )

export default router