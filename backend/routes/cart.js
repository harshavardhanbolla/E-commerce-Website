// routes/cart.js
const express = require('express');
const router = express.Router();
const { 
    getCart,
    addToCart,
    removeFromCart
} = require('../controllers/cartController');
const { auth } = require('../middleware/auth');

router.use(auth);
router.get('/', getCart);
router.post('/add', addToCart);
router.delete('/:productId', removeFromCart);

module.exports = router;