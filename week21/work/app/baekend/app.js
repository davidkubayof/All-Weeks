import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

import roterLaunchers from './roter/roterLaunchers.js'
import roterAuth from './roter/roterAuth.js'
import { authenticateJWT } from './middlwer/authenticateJWT.js'

config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', roterAuth)
app.use('/api', authenticateJWT, roterLaunchers)

app.listen(process.env.PORT, () => {
    console.log(`server run on http://localhost:${process.env.PORT}`);
})
