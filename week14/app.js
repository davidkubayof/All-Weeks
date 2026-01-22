import express from 'express'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/sumbit",async(req,res)=>{
    console.log(await req.body);    
    res.send("sending")
})
app.listen(port,()=>{
    console.log(`srever run on ${port}`);
})