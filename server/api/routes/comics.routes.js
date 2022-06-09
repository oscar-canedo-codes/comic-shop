// IMPORTS
const express = require("express");
const { isAuth } = require('../../middlewares/auth.middleware');

//EXPRESS ENDPOINTS
const comicRoutes = express.Router();

// CONTROLLER
const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne
} = require('../controllers/comics.controllers');

// GET ALL
comicRoutes.get('/', getAll);
// GET BY ID
comicRoutes.get('/:id', getOne);
// CREATE BY POST
comicRoutes.post('/', [isAuth], postOne);
// UPDATE COMIC
comicRoutes.patch('/:id', [isAuth], patchOne);
// DELETE COMIC
comicRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = comicRoutes;