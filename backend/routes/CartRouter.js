import express from 'express';
import query from '../data/utils/data.js';

import {
  getCartById,
  getUsersCarts,
  createCart,
  addToCart,
  updateQuantity,
  clearCart,
  removeSingleProduct
} from '../data/utils/queryText.js';

const CartRouter = express.Router();

// GET Gets a list of the users carts
CartRouter.route('/:user_id')
  .get(async (req, res, next) => {
    const text = getUsersCarts;
    const value = [req.params.userId];

    try {
      const { rows } = await query(text, value);
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res, next) => {
    const text = createCart;
    const values = [req.params.userId];

    try {
      const { rows } = await query(text, values);
      res.json(rows);
    } catch (err) {
      console.error(err);
    }
  });


// GET Gets the items in users cart by user ID and returns a list of products contained including quantity
CartRouter.get('/:cartId', async (req, res, next) => {
  const text = getCartById;
  const values = [req.params.cartId]

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) }
    res.json(rows);
  } catch (err) {
    console.log(err);
  }
});

// POST Add an item to cart
CartRouter.post('/add', async (req, res, next) => {
  const text = addToCart;
  const { cart_id, product_id, quantity } = req.body;
  const values = [cart_id, product_id, quantity];

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
});

// PUT Update an item in a cart
CartRouter.put('/update', async (req, res, next) => {
  const text = updateQuantity;
  const { quantity, cart_id, product_id } = req.body;
  const values = [quantity, cart_id, product_id];

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.error(err);
  } 
});

// DELETE Delete a cart when the user wants to clear it.
// TODO #50 Add a status to carts to tell what's inactive, cleared, abandoned, checkout failed, etc.
CartRouter.delete('/clear', async (req, res, next) => {
  const text = clearCart;
  const { cart_id } = req.body;
  const values = [cart_id];

  try {
    const { rows } = await query(text, values);
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
});

// DELETE Delete an item from a cart when removed or quantity set to zero
CartRouter.delete('/remove', async (req, res, next) => {
  const text = removeSingleProduct;
  const { cart_id, product_id } = req.body;
  const values = [cart_id, product_id];

  try {
    const { rows } = await query(text, values);
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
});

export default CartRouter;