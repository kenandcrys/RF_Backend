// Helper function to create animals/products table
function createAnimalTable(knex, tableName) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.string('pricePerBag').notNullable();
    table.string('pricePer20').notNullable();
    table.string('pricePer40').notNullable();
    table.text('image');
    table.integer('category_id') // Foreign key to categories table
      .unsigned()
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE'); // Ensures that if a category is deleted, all related animals are also deleted.
  });
}

exports.up = function (knex) {
  return knex.schema
    .createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('categoryName').notNullable().unique(); // Category name is unique
      table.text('bannerImg');
    })
    .then(() => {
      return Promise.all([
        createAnimalTable(knex, 'Cattle'),
        createAnimalTable(knex, 'Swine'),
        createAnimalTable(knex, 'Rabbit'),
        createAnimalTable(knex, 'Equine'),
        createAnimalTable(knex, 'Poultry'),
        createAnimalTable(knex, 'SheepAndGoat'),
        createAnimalTable(knex, 'StraightGrains'),
      ]);
    });
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('Cattle'),
    knex.schema.dropTable('Swine'),
    knex.schema.dropTable('Rabbit'),
    knex.schema.dropTable('Equine'),
    knex.schema.dropTable('Poultry'),
    knex.schema.dropTable('SheepAndGoat'),
    knex.schema.dropTable('StraightGrains'),
  ])
    .then(() => knex.schema.dropTable('categories'));
};
