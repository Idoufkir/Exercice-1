const express = require('express');
const router = express.Router();
const products = require('../controllers/product');
const authHeader = require('../middleware/middleware');
const api_key = process.env.API_KEY;


// GET / product / List des produits
router.get('/', (req, res) => {
    products.getProducts(req, res);
});


// POST / product / Ajout de produit
router.post('/', authHeader(api_key), (req, res) => {
    products.postProduct(req, res);
});


// DELETE / product / {: product_id }	Suppression de produit
router.delete('/:product_id', authHeader(api_key), (req, res) => {
    products.deleteProduct(req, res);
});


// PATCH / product / {: product_id }	Mise à jour de produit
router.patch('/:product_id/', authHeader(api_key), (req, res) => {
    products.updateProduct(req, res);
});


// GET / product / {: product_id } / variants / List des variantes d'un produit {product_id}
router.get('/:product_id/variants', (req, res) => {
    products.getVariantsProduct(req, res);
});


// GET / product / {: product_id } / variants / {: variant_id }	List de la variante { variant_id } du produit { product_id }
router.get('/:product_id/variants/:variant_id', (req, res) => {
    products.getVariantById(req, res);
});

// GET / product / {: product_id }	List du produit { product_id }
router.get('/:product_id', (req, res) => {
    products.getProductById(req, res);
});


module.exports = router;
