"use strict";

import express from 'express';

const Router = express.Router();

import HomeController from './controllers/HomeController';
import PaymentController from './controllers/PaymentController';

const paymentController = new PaymentController();

Router.get('/', HomeController);

Router.route('/payment')
  .get(paymentController.index)
  .post(paymentController.store)
  .put(paymentController.update);

Router.get('/payment/:id', paymentController.show);

export default Router;