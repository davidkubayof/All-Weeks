import express from 'express'

const app = express();
const port = 3002;

app.use(express.json());


app.listen(port,()=>{
  console.log(`server runing on http://localhost:${port}`);
})
