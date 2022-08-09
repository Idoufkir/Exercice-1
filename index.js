const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const app = express();
const dbConfig = require('./config/config.js');
const bodyParser = require('body-parser');
require('dotenv').config();


const productRouter = require('./routes/product');

app.use(express.json())
app.use(cors());
app.use('/product', productRouter);

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongodb connected.."));
app.use(bodyParser.urlencoded({
    extended: true,
    useUnifiedTopology: true
}));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening at port: ${port}`);
})