import express from "express";

const app = express();
const port = 3002;

app.use(express.json());

//0
app.get('/greet',(req , res)=>{
  res.json({ "msg": `hi from get endpoint ${new Date}` })
})

//1
app.get('/greet/:name',(req , res)=>{
  const name = req.params.name
  console.log(`i got name: ${name}`);
  res.json({ "msg": `got name: ${name}` })
})
//2
app.get('/test', async (req,res)=>{
  const requset = await fetch("http://localhost:3002/greet/Bob")
  const data = await requset.json()
  const words = data.msg.split(" ")
  if(words[2]==="Bob"){
    res.json({"result":"ok"})
  }
  else{
    res.json({"result":"fail"})
  } 

})
//3
app.post('/action' , async (req,res)=>{
  const action = req.body.action

  if(!req.body || !action || !action==="joke" || !action==="cat fact" ){
    res.status(400).json({ "msg": "body is malformed" })
  }
  if(action==="joke"){
    const requset = await fetch("https://official-joke-api.appspot.com/random_joke")
    LOG
    res.send(requset.toUpperCase())
    
  }
})
//server
app.listen(port,()=>{
  console.log(`server runing on http://localhost:${port}`);
})
