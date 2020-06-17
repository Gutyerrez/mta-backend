"use strict";

import express, { Request, Response } from 'express';

const Router = express.Router();

import Home from './controllers/Home';

Router.get('/home', Home);

export default Router;