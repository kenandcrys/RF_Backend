// Example: 202310012335_create_swine_table.js
exports.up = function(knex) {
    return knex.schema.createTable('Swine', function(table) {
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
    return knex.schema.dropTableIfExists('Swine');
  };
  
