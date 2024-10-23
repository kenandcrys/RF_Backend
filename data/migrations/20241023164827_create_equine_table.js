exports.up = function(knex) {
    return knex.schema.createTable('Equine', function(table) {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('name', 255).notNullable(); // Name of the equine feed
      table.text('description'); // Description of the feed
      table.string('pricePerBag', 255).notNullable(); // Price per bag
      table.string('pricePer20', 255).notNullable(); // Price for 20 units
      table.string('pricePer40', 255).notNullable(); // Price for 40 units
      table.text('image'); // URL for the image
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE'); // Foreign key to categories table
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Equine'); // Drop the table if it exists (used for rollback)
  };
  