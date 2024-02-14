import 'dotenv/config.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = 3000; // TODO Update this port to use dotenv

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

import { UserRouter } from './routes/UserRouter.js';
app.use('/api/user', UserRouter);

import { ProductsRouter } from './routes/ProductsRouter.js';
app.use('/api/products', ProductsRouter);

import { CartRouter } from './routes/CartRouter.js';
app.use('/api/cart', CartRouter);

import { CheckoutRouter } from './routes/CheckoutRouter.js';
app.use('/api/checkout', CheckoutRouter);

import { OrderRouter } from './routes/OrderRouter.js';
app.use('/api/order', OrderRouter);

import { CategoryRouter } from './routes/CategoryRouter.js'
app.use('/api/category', CategoryRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});