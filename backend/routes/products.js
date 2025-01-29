// routes/products.js
const express = require('express');
const router = express.Router();
const { 
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const { auth, isAdmin } = require('../middleware/auth');

router.get('/', getAllProducts);
router.post('/', [auth, isAdmin], createProduct);
router.put('/:id', [auth, isAdmin], updateProduct);
router.delete('/:id', [auth, isAdmin], deleteProduct);

module.exports = router;