// seeds/poultry_seed.js

exports.seed = function(knex) {
  // Deletes ALL existing entries in Poultry
  return knex('Poultry').del()
    .then(function () {
      // Inserts seed entries
      return knex('Poultry').insert([
        {
          id: 1,
          name: 'All Purpose',
          description: '18% protein All purpose poultry feed',
          pricePerBag: '$21.75',
          pricePer20: '$20.75',
          pricePer40: '$20.25',
          image: 'https://i.imgur.com/ZzzjUJb.png',
          category_id: 3
        },
        {
          id: 2,
          name: 'Broiler Grower',
          description: '21% protein medicated feed for meat birds',
          pricePerBag: '$25.00',
          pricePer20: '$24.00',
          pricePer40: '$23.50',
          image: 'https://i.imgur.com/KxzEO7M.png',
          category_id: 3
        },
        {
          id: 3,
          name: 'Chick Start',
          description: '20% protein Medicated and non-medicated chick start',
          pricePerBag: '$23.00',
          pricePer20: '$22.00',
          pricePer40: '$21.50',
          image: 'https://i.imgur.com/hLoksc4.png',
          category_id: 3
        },
        {
          id: 4,
          name: 'Cracked Corn',
          description: 'Cracked corn',
          pricePerBag: '$20.50',
          pricePer20: '$19.50',
          pricePer40: '$19.00',
          image: 'https://i.imgur.com/kLkJCoB.png',
          category_id: 3
        },
        {
          id: 5,
          name: 'Fowl Power',
          description: 'Mixed grain and pellet poultry feed',
          pricePerBag: '$21.75',
          pricePer20: '$20.75',
          pricePer40: '$20.25',
          image: 'https://i.imgur.com/7iykxzV.png',
          category_id: 3
        },
        {
          id: 6,
          name: 'Game Bird',
          description: '27% protein game bird feed (pellet and crumble available)',
          pricePerBag: '$25.00',
          pricePer20: '$24.00',
          pricePer40: '$23.50',
          image: 'https://i.imgur.com/kmZumHM.png',
          category_id: 3
        },
        {
          id: 7,
          name: 'Layer Ration Complete',
          description: '16% protein Egg Layer blend (pellet and crumble available)',
          pricePerBag: '$21.00',
          pricePer20: '$20.00',
          pricePer40: '$19.50',
          image: 'https://i.imgur.com/8ePJaRx.png',
          category_id: 3
        },
        {
          id: 8,
          name: 'Oyster Shell',
          description: 'Crushed oyster shells',
          pricePerBag: '$24.00',
          pricePer20: '$23.00',
          pricePer40: '$22.50',
          image: 'https://i.imgur.com/KxzEO7M.png',
          category_id: 3
        },
        {
          id: 9,
          name: 'Two Way Scratch',
          description: 'Cracked corn and barley',
          pricePerBag: '$21.00',
          pricePer20: '$20.00',
          pricePer40: '$19.50',
          image: 'https://i.imgur.com/X7BCqHD.png',
          category_id: 3
        }
      ]);
    });
};

