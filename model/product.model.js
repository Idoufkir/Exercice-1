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