const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema ({

    article: {type: String},
    price: {type: Number},
    image: {type: String},
    category:{type:Number},
},{
    timestamps:true,
});

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;