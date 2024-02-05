const express = require('express');

const ProductsRouter = express.Router();

ProductsRouter.route('/')
  // GET All Products
  .get((req, res, next) => {

  })
  // POST A List of Products
  .post((req, res, next) => {

  })
  // PUT Update a list of products 
  .put((req, res, next) => {
  
  });

ProductsRouter.route('/:id')
  // GET A Single Product by ID
  .get((req, res, next) => {

  })
  // POST A Single Product by ID
  .post((req, res, next) => {
  
  })
  // PUT Update a single product by ID
  .put((req, res, next) => {

  })
  // DELETE A single product by ID
  .delete((req, res, next) => {
  
  });

// GET A list of products by category
ProductsRouter.get('/:category', (req, res, next) => {

});

// GET A list of products by query and/or filter
ProductsRouter.get('/', (req, res, next) => {

});

module.exports = ProductsRouter;