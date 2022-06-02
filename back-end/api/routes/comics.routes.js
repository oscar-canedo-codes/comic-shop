const express = require("express");

const Comic = require("../models/Comic");

const comicsRouter = express.Router();


// CREATE


// UPDATE


// DELETE

comicsRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  return Comics.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json(`Comic with id: ${id} deleted`);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

module.exports = comicsRouter;