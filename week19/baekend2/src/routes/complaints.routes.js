import express from "express";
import { createComplaintsC, loginC, returnComplaints,} from "../controllers/complaints.controller.js";
import { varifyAdminM } from "../middlewares/requireAdminAuth.js";

const router = express.Router();

router.post("/complaints", createComplaintsC);
router.post("/admin/login", loginC);
router.get("/complaints", varifyAdminM , returnComplaints);

export default router;
