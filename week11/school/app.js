import express from 'express'
import routerStudents from './routes/students.route.js'

const app = express();
const port = 3002;

app.use(express.json())

//students 
app.use('/students', routerStudents)

app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server run on ${port}`);
})
