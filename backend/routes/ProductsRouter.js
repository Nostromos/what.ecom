import express from 'express';
import query from '../data/utils/data.js';
import {
  updateSingleProductQuantity,
  getProductsByCategory,
  getCurrentDeals
} from '../data/utils/queryText.js';

const ProductsRouter = express.Router();

ProductsRouter.route('/')
  // GET All Products
  .get(async (req, res, next) => {

    try {
      const { rows } = await query('SELECT * FROM products LIMIT 10');
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
    }

  });

ProductsRouter.get('/deals', async (req, res, next) => {
  const text = getCurrentDeals;
  const values = [];

  try {
    const { rows } = await query(text, values);
    //console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }

})

ProductsRouter.route('/:id')
  // GET A Single Product by ID
  .get(async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const { rows } = await query('SELECT * FROM products WHERE id = $1', [id]);
      //if (rows) { console.log(rows) };
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
      //if (rows) { console.log(rows) };
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
    //if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.error(err);
  }

});

export default ProductsRouter;