import express from 'express';
import query from '../data/utils/data.js';

import {
  getOrderInformation
} from '../data/utils/queryText.js';

const OrderRouter = express.Router();

OrderRouter.get('/', async (req, res, next) => {
  const text = getOrderInformation;
  const { id } = req.body;
  const values = [id];

  try {
    const { rows } = query(text, values);
    //if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.error(err);
  }

});

OrderRouter.post('/', async (req, res, next) => {
  
});

export default OrderRouter;