"use strict";

import { Request, Response } from 'express';

const Home = (request: Request, response: Response) => {
  return response.json({
    hello: 'World!'
  });
};

export default Home;