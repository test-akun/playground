import express from 'express';
import { getProductById, getProducts, saveProduct } from '../controllers/productController.js';

const router = express.Router();

// GET
router.get('/', getProducts)
// router.get('/', (req, res) => {
//   res.end('welcome');
// });

// GET ProductByID
router.get('/:id', getProductById)

// POST
// router.post('/', (req, res) => {
//   res.end('welcome POST');
// });
router.post('/', saveProduct)

export default router;
