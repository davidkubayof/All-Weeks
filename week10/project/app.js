import express from 'express'
import usersRoutes from './routes/usersR.js'

const app = express(); 
const port = 3001;

app.use(express.json())


//routes user
app.use('/users' , usersRoutes )


// app.use((err,req,res,next)=>{
//     res.status(500).json({err: err})
// })


// {
//     "name": "moshe",
//     "password": 1234
// }

app.listen(port,()=>{
    console.log(`server run on ${port}`)
})
