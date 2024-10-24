exports.seed = function(knex) {
  // Deletes ALL existing entries in the Cattle table
  return knex('Cattle').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cattle').insert([
        { id: 1, name: '16% Dairy', description: '16% protein dairy cow feed', pricePerBag: '$20.00', pricePer20: '$19.00', pricePer40: '$18.50', image: 'https://i.imgur.com/sZwrxu6.png', category_id: 1 },
        { id: 2, name: 'BYB', description: 'Barn yard buffet (all stock feed)', pricePerBag: '$18.25', pricePer20: '$17.25', pricePer40: '$16.75', image: 'https://i.imgur.com/g7Bt1a7.png', category_id: 1 },
        { id: 3, name: 'Cattle Fattener', description: 'Used to put weight on cattle', pricePerBag: '$20.50', pricePer20: '$19.50', pricePer40: '$19.00', image: 'https://i.imgur.com/TCQNEDy.png', category_id: 1 },
        { id: 4, name: 'Chris Mix', description: '', pricePerBag: '$20.25', pricePer20: '$19.25', pricePer40: '$18.75', image: 'https://i.imgur.com/Ap1wtAZ.png', category_id: 1 }
      ]);
    });
};

