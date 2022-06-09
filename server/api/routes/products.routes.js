// IMPORTS
const express = require("express");
const { isAuth } = require('../../middlewares/auth.middleware');

//EXPRESS ENDPOINTS
const productRoutes = express.Router();

// CONTROLLER
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('../controllers/products.controllers');

// GET ALL
productRoutes.get('/', getAll);
// GET BY ID
productRoutes.get('/:id', getOne);
// CREATE BY POST
productRoutes.post('/', [isAuth], postOne);
// UPDATE PRODUCT
productRoutes.patch('/:id', [isAuth], patchOne);
// DELETE PRODUCT
productRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = productRoutes;