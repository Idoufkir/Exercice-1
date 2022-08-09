const Product = require('../model/product.model');


let message = "";

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

exports.postProduct = (req, res) => {
    const addProduct = new Product(req.body);

    addProduct.save((err, product) => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while creating the product."
            });
        }
        res.json(product);
    });
};

// exports.getProduct = async (req, res, next) => {
//     let product
//     try {
//         product = await Product.findById(req.params.id)
//         if (product == null) {
//             return res.status(404).json({ message: 'Cannot find Product!' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
//     res.product = product
//     next()
// }

exports.deleteProduct = async (req, res) => {
    Product.findByIdAndDelete(req.params.product_id, function (err, product) {
        if (err || product == null) {
            return res.status(404).send({
                success: false,
                message: "Cannot find Product!"
            });
        }
        res.send({
            success: true,
            message: "Product successfully deleted!",
            data: product
        });
    });
}