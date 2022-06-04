const express = require("express");
const Product = require("../models/Product");

const productsRouter = express.Router();


// GET

productsRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    return Product.findById(id)
      .then((product) => {
        if (!product) {
          const error = new Error("Product not found");
          error.status = 404;
          return next(error);
        }
        return res.status(200).json(product);
      })
      .catch((err) => {
        const error = new Error(err);
        error.status = 500;
        return next(error);
      });
  });


// CREATE 

productsRouter.post("/", (req, res, next) => {
    
    const imageProduct = req.file_url ? req.file_url : undefined;

    const newProduct = new Product({
      article: req.body.article,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
    });

    return newProduct
      .save()
      .then(() => {
        return res.status(201).json(newProduct);
      })
      .catch((err) => {
        const error = new Error(err);
        error.status = 500;
        return next();
      });
  });

// UPDATE 

productsRouter.put("/:id", (req, res, next) => {

  const id = req.params.id;
  return Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((productUpdated) => {
      return res.status(200).json(productUpdated);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//DELETE

productsRouter.delete("/:id", (req, res, next) => {
    
  const id = req.params.id;
  return Product.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json(`Product with id: ${id} deleted`);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

module.exports = productsRouter;