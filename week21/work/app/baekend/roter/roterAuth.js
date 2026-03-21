import { Router } from "express"
import { createUser, deleteUser, getUser, getUsers, login, updateUser } from "../ctrls/ctrlsAuth.js";
import { authenticateJWT } from "../middlwer/authenticateJWT.js";
import { isAdmin } from "../middlwer/isAdmin.js";
import { isValidRole } from "../middlwer/IsValidRole.js";

const roter = Router()

roter.get('/user', authenticateJWT, isValidRole, getUser)
roter.get('/users', authenticateJWT, isValidRole, getUsers)
roter.post('/register/create', authenticateJWT, isAdmin, createUser)
roter.post('/login', login)
roter.put('/register/update', authenticateJWT, isAdmin, updateUser)
roter.delete('/register/delete/:id', authenticateJWT, isAdmin, deleteUser)

export default roter;