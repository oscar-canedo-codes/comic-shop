const express = require("express");

const Comic = require("../models/Comic");

const comicsRouter = express.Router();

// SEARCH

cochesRouter.get('/:id', (req, res) => {

    const id = req.params.id

    return Coche.findById(id)
                .then( coche => {
                    if(!coche) {
                        const error = new Error('coche no encontrado')
                        error.status = 404
                        return next(error)
                    }
                    return res.status(200).json(coche);
                })
                .catch( err => {
                    const error = new Error(err)
                    error.status = 500
                    return next(error)
                })

});


// CREATE

comicsRouter.post('/', (req, res, next) => {

  const comic = newComic(req.body)

  return newComic.save()
          .then( () => {
              return res.status(201).json(newComic)
          })        
          .catch( err => {
              const error = new Error(`Comic not saved ${err}`)
              error.status = 405;
              return next(error);
      })

});

// UPDATE


// DELETE

comicsRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  return Comic.findByIdAndDelete(id)
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