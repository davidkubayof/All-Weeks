import express from 'express'
import routerProducts from './routes/products.route.js'
import { config } from "dotenv";
config()

const app = express();
const port = process.env.PORT;

app.use(express.json())

//products 
app.use('/products', routerProducts)

app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server run on ${port}`);
})
