import express from 'express'
import routerReports  from './routes/reports.route.js'
import { config } from "dotenv";

config()

const app = express();
const port = process.env.PORT;

app.use(express.json())

//reports 
app.use('/reports', routerReports)

// app.use((err, req, res, next) => {
//     res.status(500).json({ err: err ? err : "reports error" });
// })
app.listen(port, () => {
    console.log(`server run on ${port}`);
})