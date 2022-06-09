const Comic = require('../models/Comic');
const { deleteImgCloudinary } = require('../../middlewares/deleteFile.middleware');

// GET -> ALL COMICS FROM DB
const getAll = async (req, res, next) => {

    try {

        const comics = await Comic.find();
        res.status(200).json(comics);
    } catch (error) {
        return next(error)
    }
}

// GET -> INDIVIDUAL ITEM BY ID
const getOne = async (req, res, next) => {

    try {

        const { id } = req.params;
        const comic = await Comic.findById(id);
        res.status(200).json(comic);
    } catch (error) {
        return next(error)
    }
}

// CREATE -> ADD NEW COMIC

const postOne = async (req, res, next) => {
    try {
        const comic = new Comic();
        comic.title = req.body.title;
        comic.illustrator = req.body.illustrator;
        comic.author = req.body.author;
        comic.year = req.body.year;
        comic.description = req.body.description;
        comic.image = req.body.image;
        const comicDB = await comic.save();
        
        return res.status(201).json(comicDB)
    } catch (error) {
        return next(error)
    }
    
}

// UPDATE -> FETCH BY ID
const patchOne = async (req, res, next) => {
    try {

        const { id } = req.params;
        const comic = new Comic(req.body);
        comic._id = id;
        const updateComic = await Book.findByIdAndUpdate(id, comic);
        return res.status(200).json(updateComic);
    } catch (error) {
        return next(error);
    }
}

// DELETE -> FETCH BY ID
const deleteOne = async (req, res, next) => {

    try {

        const { id } = req.params;
        const comic = await Cook.findByIdAndDelete(id);
        return res.status(200).json(comic);
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