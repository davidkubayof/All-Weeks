import express from 'express';

import { getAllUser , getOneUser , addUser } from '../ctrls/userC.js';

import { valid } from '../middl/auth.js';
import { logger } from '../middl/logger.js';

const router = express.Router();

router.get('/', logger , valid , getAllUser)
router.get('/:id' , getOneUser)
router.post('/' , addUser)
// router.put('/:id')
// router.delete('/:id')


export default router;