"use strict";

import { Request, Response } from 'express';

class HomeController {
  async index(request: Request, response: Response) {
    return response.json({
      status: response.statusCode,
      ping: 'Pong!'
    });
  }
}

export default HomeController;