import express from 'express'
import { validUserM } from '../middleware/middlewareUser.js';
import { creatMessagesC } from '../ctrls/messages.controler.js';//, loginC , messagesC , getAllMessagesC , getMessagesByUserC , deleteByIdC } from '../ctrls/userC.js';

const router = express.Router();
router.post('/', validUserM , creatMessagesC)
// router.get('/', getAllMessagesC)
// router.get('/user/:userId', getMessagesByUserC)
router.delete('/:id',validUserM , deleteByIdC)

export default router;
