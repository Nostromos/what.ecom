import express from 'express';

export const CheckoutRouter = express.Router();

CheckoutRouter.get('/', async (req, res, next) => {
  res.json({ msg: 'Not Implemented Yet and not sure its needed'})
})