exports.up = function(knex) {
    return knex.schema.createTable('categories', function(table) {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('categoryName', 255).notNullable(); // Category name with a max length of 255
      table.text('bannerImg'); // Banner image URL as TEXT
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories'); // Drop table if it exists (used for rollback)
  };
  
