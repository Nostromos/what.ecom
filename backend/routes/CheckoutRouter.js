import express from 'express';
//import query from '../data/utils/data.js';

//import * as queryText from '../data/utils/queryText.js';

export const CheckoutRouter = express.Router();

CheckoutRouter.get('/', async (req, res, next) => {
  res.json({ msg: 'Not Implemented Yet and not sure its needed'})
})