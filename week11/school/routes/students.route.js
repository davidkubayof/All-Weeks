import express from 'express'
import { createStudentC ,readStudentC , getStudentByIDC , updateStudent , deleteStudent } from '../ctrls/studant.controler.js';

const router = express.Router();

router.post('/', createStudentC)
router.get('/', readStudentC )
router.get('/:id', getStudentByIDC )
router.put('/:id', updateStudent)
router.delete('/:id',  deleteStudent)

export default router;