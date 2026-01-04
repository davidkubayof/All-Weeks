import express from 'express'
import routerUsers  from './routes/users.route.js'
import routerMessages  from './routes/messages.route.js'
import { config } from "dotenv";
import { connectToSupabase } from './DB/supabase.db.js';

//dotenv
config()

//supabase
connectToSupabase()

const app = express();
app.use(express.json())

//users
app.use('/', routerUsers)
// messages
app.use('/messages', routerMessages)

// app.use((err, req, res, next) => {
//     res.status(500).json({ err: err ? err : "reports error" });
// })
app.listen(process.env.PORT, () => {
    console.log(`server run on ${process.env.PORT}`);
})