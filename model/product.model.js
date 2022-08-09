const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productschema = new Schema({
    reference: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    variants: [{
        sku: { type: String, required: true },
        specification: { type: String, required: true },
        price: { type: Number, required: true },
    }],
});

module.exports = mongoose.model('Product', productschema);

// let carda = [{
//     reference: "12345",
//     name: "Product 1",
//     description: "This is the first Product!",
//     image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//     variants: [{
//         sku: "12345",
//         specification: "Size: S",
//         price: 10,
//     },
//     {
//         sku: "67890",
//         specification: "Size: L",
//         price: 18,
//     }],
// }];

// productModel.create(carda)