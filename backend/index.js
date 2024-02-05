/* Imports */
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const UserRouter = require('./routes/UserRouter.js');
const ProductsRouter = require('./routes/ProductsRouter.js');
const CartRouter = require('./routes/CartRouter.js');
const CheckoutRouter = require('./routes/CheckoutRouter.js');
const OrderRouter = require('./routes/OrderRouter.js');

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
const port = 3000;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/user', UserRouter);
app.use('/products', ProductsRouter);
app.use('/cart', CartRouter);
app.use('/checkout', CheckoutRouter);
app.use('/order', OrderRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});