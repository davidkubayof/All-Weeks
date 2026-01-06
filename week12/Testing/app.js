import express from 'express'
// import { config } from 'dotenv'
import routerWeather from './router/router.weather.js'

// config()

const app = express()

app.use(express.json())

app.use('/', routerWeather)

// app.listen(process.env.PORT ,() =>
//     console.log(`server run on port ${process.env.PORT}`)
// )
export default app;