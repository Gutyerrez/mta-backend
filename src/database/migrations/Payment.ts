"use strict";

import knex from '../connection';

const Payment = {
  up: () => {
    knex.schema.createTableIfNotExists('shop_payments', (table) => {
      table.increments();

      table.string('username').notNullable();
      table.string('payment_id').notNullable();
      table.string('status').notNullable();
      table.boolean('delivered').nullable();
      table.bigInteger('created_at').notNullable();
      table.bigInteger('updated_at').notNullable();
    });
  },
  down: () => {
    knex.schema.dropTableIfExists('shop_payments');
  }
};

export default Payment;