const express = require('express');

const UserRouter = express.Router();
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retrieve a user object or objects
 *     description: Retrieve an object containing user information on login or nav to profile page.
 *     responses:
 *       200:
 *         description: An objecting containing user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user's unique ID.
 *                         example: 132248
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Michael Monaghan
*/                       

// GET Get a single user
UserRouter.route('/')
  .get((req, res, next) => {

  })
  .put((req, res, next) => {

  });

// POST Register a new user
UserRouter.route('/register')
  .post((req, res, next) => {
  
  });

// POST Log a user in
UserRouter.route('/login')
  .post((req, res, next) => {

  });

module.exports = UserRouter;