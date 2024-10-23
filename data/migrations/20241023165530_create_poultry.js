// migrations/202310012335_create_poultry.js

exports.up = function(knex) {
    return knex.schema.createTable('Poultry', (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.text('description');
      table.string('pricePerBag', 255).notNullable();
      table.string('pricePer20', 255).notNullable();
      table.string('pricePer40', 255).notNullable();
      table.text('image');
      table.integer('category_id').unsigned();
      table
        .foreign('category_id')
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Poultry');
  };
  
