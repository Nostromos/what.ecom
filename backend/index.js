/* Imports */
import 'dotenv/config.js';
import express from 'express';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

/* Swagger/JSDocs Setup */
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for what.ecom',
    version: '0.0.0',
    description: 'This is a REST API for what.ecom, a portfolio ecommerce webapp.',
    license: {
      name: 'MIT License',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Michael Monaghan',
      url: 'https://what.lol',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local Development Server',
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ['./routes/*js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

/* Express */
const app = express();
const port = 3000; // TODO Update this port to use dotenv

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});