import express from 'express'
import productsControler from '../ctrls/products.controler.js';

const router = express.Router();

router.post('/login', productsControler.login)
router.get('/products', productsControler.getProducts)

export default router;