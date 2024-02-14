import express from 'express';

const CheckoutRouter = express.Router();

CheckoutRouter.get('/', async (req, res, next) => {
  res.json({ msg: 'Not Implemented Yet and not sure its needed'})
})

export default CheckoutRouter;