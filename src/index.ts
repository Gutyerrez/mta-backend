"use strict";

import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log(`Runing webserver on 3333 port.`);
});