"use strict";

import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTableIfNotExists('shop_payments', (table) => {
    table.increments();

    table.string('username').notNullable();
    table.string('payment_id').notNullable();
    table.string('status').notNullable();
    table.boolean('delivered').nullable();
    table.bigInteger('created_at').notNullable();
    table.bigInteger('updated_at').notNullable();
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists('shop_payments');
}