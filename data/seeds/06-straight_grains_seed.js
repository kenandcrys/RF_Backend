// Example: 202310012335_straight_grains_seed.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('StraightGrains').del()
    .then(function () {
      // Inserts seed entries
      return knex('StraightGrains').insert([
        {
          id: 1,
          name: 'Rolled Barley',
          description: 'Rolled barley',
          pricePerBag: '$20.00',
          pricePer20: '$19.00',
          pricePer40: '$18.50',
          image: 'https://i.imgur.com/K0RcxwH.png',
          category_id: 6
        },
        {
          id: 2,
          name: 'Rolled Corn',
          description: 'Rolled corn',
          pricePerBag: '$20.00',
          pricePer20: '$19.00',
          pricePer40: '$18.50',
          image: 'https://i.imgur.com/m6wI0jU.png',
          category_id: 6
        },
        {
          id: 3,
          name: 'Soybean Meal',
          description: 'Natural source of protein',
          pricePerBag: '$28.00',
          pricePer20: '$27.00',
          pricePer40: '$26.50',
          image: 'https://i.imgur.com/4IaUJci.png',
          category_id: 6
        },
        {
          id: 4,
          name: 'Whole Barley',
          description: 'Whole barley',
          pricePerBag: '$19.75',
          pricePer20: '$18.75',
          pricePer40: '$18.25',
          image: 'https://i.imgur.com/Vt8i1Yk.png',
          category_id: 6
        },
        {
          id: 5,
          name: 'Whole Corn',
          description: 'Whole corn',
          pricePerBag: '$19.75',
          pricePer20: '$18.75',
          pricePer40: '$18.25',
          image: 'https://i.imgur.com/lq4V45H.png',
          category_id: 6
        },
        {
          id: 6,
          name: 'Whole Oats',
          description: 'Whole oats',
          pricePerBag: '$22.50',
          pricePer20: '$21.50',
          pricePer40: '$21.00',
          image: 'https://i.imgur.com/0iE7KlC.png',
          category_id: 6
        },
        {
          id: 7,
          name: 'Whole Wheat',
          description: 'Whole wheat',
          pricePerBag: '$21.25',
          pricePer20: '$20.25',
          pricePer40: '$19.75',
          image: 'https://i.imgur.com/dqLz2D5.png',
          category_id: 6
        }
      ]);
    });
};

