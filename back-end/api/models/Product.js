const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema ({
    article: {type: String, required:true},
    price: {type: Number},
    image: {type: String, required: true},
    category:{type:Number},
},{
    timestamps:true,
    collection: 'products',
});

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;