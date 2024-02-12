import { Router } from 'express';

export const UserRouter = new Router();              

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