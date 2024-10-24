// Example: 202310012335_rabbit_seed.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Rabbit').del()
    .then(function () {
      // Inserts seed entries
      return knex('Rabbit').insert([
        {
          id: 1,
          name: '16% Rabbit',
          description: '16% protein rabbit feed',
          pricePerBag: '$22.50',
          pricePer20: '$21.50',
          pricePer40: '$21.00',
          image: 'https://i.imgur.com/ZS8IB7K.png',
          category_id: 4
        },
        {
          id: 2,
          name: '18% Rabbit',
          description: '18% protein rabbit feed',
          pricePerBag: '$23.75',
          pricePer20: '$22.75',
          pricePer40: '$22.25',
          image: 'https://i.imgur.com/rijZXQd.png',
          category_id: 4
        }
      ]);
    });
};
