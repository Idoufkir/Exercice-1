const Product = require('../model/product.model');

exports.getProducts = (req, res) => {
    Product.find()
        .then(data => {
            var message = "";
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