import { config } from "dotenv";
import express from "express";
import cors from "cors";
import routerComplaints from "./routes/complaints.routes.js";
config()

const app = express();

app.use(express.json());
app.use(cors());

//api 
app.use("/api", routerComplaints);

app.listen(process.env.PORT, () => {
  console.log(`server run on port http://localhost:${process.env.PORT}`);
});
