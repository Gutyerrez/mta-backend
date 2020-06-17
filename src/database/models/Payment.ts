"use strict";

import knex from '../connection';

const Payment = knex.table('shop_payments');

export default Payment;