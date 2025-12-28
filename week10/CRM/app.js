import express from 'express'
import contactsRoutes from './routes/contactsR.js'

const app = express();
const port = 3002;

app.use(express.json())

//contactsRoutes
app.use('/api/contacts', contactsRoutes )


app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server run on ${port}`);
})

