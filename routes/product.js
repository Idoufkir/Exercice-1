const express = require('express');
const router = express.Router();
const products = require('../controllers/product');
const authHeader = require('../middleware/middleware');
const api_key = process.env.API_KEY;

router.get('/', (req, res) => {
    products.getProducts(req, res);
});

// router.post('/', authHeader(api_key), (req, res) => {
//     products.getProducts(req, res);
// });

module.exports = router;