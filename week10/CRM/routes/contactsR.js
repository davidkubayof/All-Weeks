import express from 'express'
import { searchByNameOrPhone , getContact } from '../controllers/contactsC.js';

const router = express.Router();

// router.get('/', searchByNameOrPhone)
router.get('/:id', getContact )

// router.post('/', valid, createUser)
// router.put('/:username', valid , updateUser)
// router.delete('/:username', valid , deleteUser)

export default router;