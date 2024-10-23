// Example: 202310012335_swine_seed.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Swine').del()
    .then(function () {
      // Inserts seed entries
      return knex('Swine').insert([
        {
          id: 1,
          name: '14% Hog',
          description: '14% protein hog feed',
          pricePerBag: '$21.00',
          pricePer20: '$20.00',
          pricePer40: '$19.50',
          image: 'https://i.imgur.com/Vnmq7kg.png',
          category_id: 7
        },
        {
          id: 2,
          name: '16% Hog',
          description: '16% protein hog feed',
          pricePerBag: '$22.00',
          pricePer20: '$21.00',
          pricePer40: '$20.50',
          image: 'https://i.imgur.com/szlzE8G.png',
          category_id: 7
        },
        {
          id: 3,
          name: '18% Pig Starter',
          description: '18% protein piglet starter',
          pricePerBag: '$24.25',
          pricePer20: '$23.25',
          pricePer40: '$22.75',
          image: 'https://i.imgur.com/IrSNO3Q.png',
          category_id: 7
        }
      ]);
    });
};
