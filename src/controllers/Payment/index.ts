"use strict";

import { Request, Response } from 'express';

import Payment from '../../database/models/Payment';

const Result = {
  index: async (request: Request, response: Response) => {
    const payments = Payment.select();

    return response.json(payments);
  },
  show: async (request: Request, response: Response) => {
    return response.json({
      ping: 'Pong'
    });
  },
  store: async (request: Request, response: Response) => {
    return response.json({
      ping: 'Pong'
    });
  },
  update: async (request: Request, response: Response) => {
    return response.json({
      ping: 'Pong'
    });
  }
};

export default Result;