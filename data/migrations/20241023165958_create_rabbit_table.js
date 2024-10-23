// Example: 202310012335_create_rabbit_table.js
exports.up = function(knex) {
    return knex.schema.createTable('Rabbit', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.string('pricePerBag').notNullable();
      table.string('pricePer20').notNullable();
      table.string('pricePer40').notNullable();
      table.text('image');
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Rabbit');
  };
  