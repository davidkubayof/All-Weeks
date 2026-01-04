import express from 'express'
import { creatUserC , getAllUsersC, eqOrBigerC , updatUserC ,  deletUserC , getByIdC} from '../ctrls/userC.js';

const router = express.Router();

router.post('/',creatUserC )
router.get('/', getAllUsersC)
router.get('/high',eqOrBigerC)
router.put('/:id/confirm',updatUserC)
router.delete('/:id',deletUserC)

//bonos
router.get('/:id', getByIdC)
// router.get('/agent/:fieldCode', ()=>{})
// router.get('/stats', ()=>{})

export default router;