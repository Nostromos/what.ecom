import express from 'express';
import query from '../data/utils/data.js';
import cors from 'cors';

import { getCartById, getUsersCarts } from '../data/utils/queryText.js';

export const CartRouter = express.Router();

// GET Gets a list of the users carts
CartRouter.get('/:userId', cors(), async (req, res, next) => {
  const text = getUsersCarts();
  const value = [req.params.userId];

  try {
    const { rows } = await query(text, value);
    if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.log(err);
  }
});

// GET Gets the items in users cart by user ID and returns a list of products contained including quantity
CartRouter.get('/:cartId', cors(), async (req, res, next) => {
  const text = getCartById();
  const values = [req.params.cartId]

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) }
    res.json(rows);
  } catch (err) {
    console.log(err);
  }
});

// POST Create a new cart whenever the first item is added and cart is empty.
CartRouter.post('/:userId', cors(), async (req, res, next) => {
  const text = createCart();
  const values = [req.params.userId];

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
});


// PUT Update an existing cart when any new items are added


// DELETE Delete a cart when the user wants to clear it.
// TODO #50 Add a status to carts to tell what's inactive, cleared, abandoned, checkout failed, etc.