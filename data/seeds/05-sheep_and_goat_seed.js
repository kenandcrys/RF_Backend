// Example: 202310012335_sheep_and_goat_seed.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('SheepAndGoat').del()
    .then(function () {
      // Inserts seed entries
      return knex('SheepAndGoat').insert([
        {
          id: 1,
          name: '16% Sheep',
          description: '16% protein sheep feed',
          pricePerBag: '$22.50',
          pricePer20: '$21.50',
          pricePer40: '$21.00',
          image: 'https://i.imgur.com/5sqHIj6.png',
          category_id: 5
        },
        {
          id: 2,
          name: 'Goat Pellet',
          description: 'General goat feed',
          pricePerBag: '$22.25',
          pricePer20: '$21.25',
          pricePer40: '$20.75',
          image: 'https://i.imgur.com/Z33dREG.png',
          category_id: 5
        },
        {
          id: 3,
          name: 'Sheep and Goat',
          description: 'Standardized sheep and goat feed',
          pricePerBag: '$21.50',
          pricePer20: '$20.50',
          pricePer40: '$20.00',
          image: 'https://i.imgur.com/7MxJM6m.png',
          category_id: 5
        }
      ]);
    });
};

