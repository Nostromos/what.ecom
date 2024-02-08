import express from 'express';
import query from '../data/utils/data.js';
import {
  updateSingleProductQuantity,
  getProductsByCategory
} from '../data/utils/queryText.js';

export const ProductsRouter = express.Router();

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
  .get(async (req, res, next) => {

    try {
      const { rows } = await query('SELECT * FROM products LIMIT 100');
      if (rows) { console.log(rows) };
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
    }

  });

ProductsRouter.route('/:id')
  // GET A Single Product by ID
  .get(async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const { rows } = await query('SELECT * FROM products WHERE id = $1', [id]);
      if (rows) { console.log(rows) };
      res.json(rows);
    } catch (err) {
      console.error(err);
    }

  })
  // PUT Update a single product by ID
  .put(async (req, res, next) => {
    const text = updateSingleProductQuantity;
    const { id } = req.params;
    const values = [id];

    try {
      const { rows } = await query(text, values);
      if (rows) { console.log(rows) };
      res.json(rows);
    } catch (err) {
      console.error(err);
    }
    
  });

// GET A list of products by category
ProductsRouter.get('/:category', async (req, res, next) => {
  const text = getProductsByCategory;
  const { category } = req.params;
  const values = [category];

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.error(err);
  }

});