"use strict";

import { Request, Response } from 'express';

import knex from '../../database/connection';

class PaymentController {
  async index(request: Request, response: Response) {
    const payments = knex('shop_payments').select();

    return response.json(payments);
  }
  
  async show(request: Request, response: Response) {
    return response.json({
      ping: 'Pong'
    });
  }

  async store(request: Request, response: Response) {
    return response.json({
      ping: 'Pong'
    });
  }

  async update(request: Request, response: Response) {
    return response.json({
      ping: 'Pong'
    });
  }
};

export default PaymentController;