const Product = require('../model/product.model');


let message = "";


// GET	/product/	List des produits
exports.getProducts = async (req, res) => {
    Product.find()
        .then(data => {
            if (data === undefined || data.length == 0) message = "No product found!";
            else message = 'Products successfully retrieved';
            res.send({
                success: true,
                message: message,
                data: data
            });
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving products."
            });
        });
};


// POST / product / Ajout de produit
exports.postProduct = (req, res) => {
    const addProduct = new Product(req.body);

    addProduct.save((err, data) => {
        if (err || data === undefined) {
            return res.status(400).send({
                success: false,
                message: err.message || "Some error occurred while creating the Product."
            });
        }
        res.send({
            success: true,
            message: "Product added successfully!",
            data: data
        });
    });
}



// DELETE / product / {: product_id }	Suppression de produit
exports.deleteProduct = async (req, res) => {
    Product.findByIdAndDelete(req.params.product_id, function (err, data) {
        if (err || data == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Product!"
            });
        }
        res.send({
            success: true,
            message: "Product successfully deleted!",
            data: data
        });
    });
};


// PATCH / product / {: product_id }	Mise à jour de produit
exports.updateProduct = async (req, res) => {
    Product.findByIdAndUpdate(req.params.product_id, req.body, { new: true }, function (err, data) {
        if (err || data == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Product!"
            });
        }
        res.send({
            success: true,
            message: "Product successfully updated!",
            data: data
        });
    });
};


// GET / product / {: product_id } / variants / List des variantes d'un produit {product_id}
exports.getVariantsProduct = async (req, res) => {
    Product.findById(req.params.product_id, function (err, product) {
        if (err || product == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Product!"
            });
        }
        res.send({
            success: true,
            message: "variants successfully retrieved!",
            data: product.variants
        });
    });
};


// GET / product / {: product_id } / variants / {: variant_id }	List de la variante { variant_id } du produit { product_id }
exports.getVariantById = async (req, res) => {
    Product.findById(req.params.product_id, function (err, product) {
        if (err || product == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Product!"
            });
        }
        const variant = product.variants.find(variant => variant._id == req.params.variant_id)
        if (variant == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Variant!"
            });
        }
        res.send({
            success: true,
            message: "Variant successfully retrieved!",
            data: variant
        });
    });
};



// GET / product / {: product_id }	List du produit { product_id }
exports.getProductById = async (req, res) => {
    Product.findById(req.params.product_id, function (err, product) {
        if (err || product == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Product!"
            });
        }
        res.send({
            success: true,
            message: "Product successfully retrieved!",
            data: product
        });
    });
}
