"use strict";

import { Request, Response } from 'express';

const Home = (request: Request, response: Response) => {
  return response.json({
    status: response.statusCode,
    ping: 'Pong!'
  });
};

export default Home;