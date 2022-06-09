const Product = require('../models/Product');

// GET -> FETCH FROM DB
const getAll = async (req, res, next) => {

    try {

        const product = await Product.find().populate('product');
        res.status(200).json(product);
    } catch (error) {
        return next(error)
    }
}

// GET -> FETCH ONE PRODUCT BY ID
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.find().populate('product');
        res.status(200).json(product);
    } catch (error) {
        return next(error)
    }
}
const postProduct = async (req, res, next) => {

    console.log(req.body)
}

// CREATE -> NEW PRODUCT
const postOne = async (req, res, next) => {
    console.log(req.body)
    try {
        const product = new Product();

        comic.name = req.body.article;
        comic.date = req.body.price;
        comic.imae = req.body.image;
        comic.category = req.body.category;
        
        const productDB = await author.save();

        return res.status(201).json(productDB)
    } catch (error) {
        return next(error)
    }
}

// UPDATE -> FETCH BY ID
const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = new Product(req.body);
        product._id = id;

        const updateProduct = await Product.findByIdAndUpdate(id, product);
        return res.status(200).json(updateProduct);
    } catch (error) {
        return next(error);
    }
}

// Delete -> Fetch by ID
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json(product);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}