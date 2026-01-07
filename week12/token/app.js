import express from 'express'
import { config } from 'dotenv'
import routerUser from './router/router.user.js'

config()

const app = express()

app.use(express.json())

app.use('/', routerUser)

app.listen(process.env.PORT ,() =>
    console.log(`server run on port ${process.env.PORT}`)
)
