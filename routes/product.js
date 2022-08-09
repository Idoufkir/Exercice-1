const express = require('express');
const router = express.Router();
const products = require('../controllers/product');

router.get('/', (req, res) => {
    products.getProducts(req, res)
});
module.exports = router;