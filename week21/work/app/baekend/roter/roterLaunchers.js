import { Router } from "express"
import { createLauncher, deleteLauncher, getLauncher, getLaunchers, updateLauncher } from "../ctrls/ctrlsLaunchers.js";
import { isIntelligenceOrAdmin } from "../middlwer/isIntelligenceOrAdmin.js";
import { isValidRole } from "../middlwer/IsValidRole.js";

const roter = Router()

roter.get('/launchers',isValidRole, getLaunchers)
roter.get('/launchers/:id',isValidRole, getLauncher)
roter.post('/launchers', isIntelligenceOrAdmin, createLauncher)
roter.put('/launchers/:id', isIntelligenceOrAdmin, updateLauncher)
roter.delete('/launchers/:id', isIntelligenceOrAdmin, deleteLauncher)

export default roter;