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


// let carda = [{
//     reference: "12345",
//     name: "Product 2",
//     description: "This is the Second Product!",
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
//     },
//     {
//         sku: "67890",
//         specification: "Size: XL",
//         price: 18,
//     }],
// }];
// const Product = mongoose.model("Product", productschema);
// Product.create(carda);


module.exports = mongoose.model('Product', productschema);