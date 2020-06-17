"use strict";

import express, { Request, Response } from 'express';

const Router = express.Router();

Router.get('/', (request: Request, response: Response) => {
  return response.json({
    hello: 'World!'
  });
});

export default Router;