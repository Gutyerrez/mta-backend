"use strict";

import express, { Request, Response } from 'express';

const Router = express.Router();

import Home from './controllers/Home';
import Payment from './controllers/Payment';

Router.get('/', Home);

Router.route('/payment')
  .get(Payment.index)
  .post(Payment.store)
  .put(Payment.update);

Router.get('/payment/:id', Payment.show);

export default Router;