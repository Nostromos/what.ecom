const express = require('express');

const ProductsRouter = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products.
 *     descriptions: Retrieves an object containing a list of all products with arbitrary sorting.
 *     responses:
 *       "200":
 *         description: An object containing a list of all products for diplay on product list page.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: integer
 *                         description: The unique ID of a product.
 *                         example: 398434882
 *                       productName:
 *                         type: string
 *                         description: The name of a product
 *                         example: Men's Boulder Fork Rain Jacket
 *       "400":
 *         description: Bad request somehow.
 *       "401":
 *         description: Unauthorized. Someone is making bad requests.
 *       "404":
 *         description: Not found. Either the DB has been wiped of all products or there's a problem with routing or something else.
 *   post:
 *     summary: Posts a list of products to the datastore.
 *     description: Posts a list of products to the datastore, deduplicating as it goes and returns a list of objects that were successfully posted, ie. not duplicates.
 *     responses:
 *       "201":
 *         description: At least part of the list was successfully uploaded.
 */

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