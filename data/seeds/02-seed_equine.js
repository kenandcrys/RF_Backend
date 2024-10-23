exports.seed = function(knex) {
  // Deletes ALL existing entries in the Equine table
  return knex('Equine').del()
    .then(function () {
      // Inserts seed entries
      return knex('Equine').insert([
        { id: 1, name: 'Chris Mix', description: '', pricePerBag: '$20.25', pricePer20: '$19.25', pricePer40: '$18.75', image: 'https://i.imgur.com/Ap1wtAZ.png', category_id: 2 },
        { id: 2, name: 'Alfalfa Pellets', description: 'Compressed alfalfa hay', pricePerBag: '$24.25', pricePer20: '$23.25', pricePer40: '$22.75', image: 'https://i.imgur.com/CiR8f6F.png', category_id: 2 },
        { id: 3, name: 'Beet Pulp', description: 'Pelletized beet pulp', pricePerBag: '$21.50', pricePer20: '$20.50', pricePer40: '$20.00', image: 'https://i.imgur.com/dPeHMom.png', category_id: 2 },
        { id: 4, name: 'Wet COB', description: 'Rolled corn, oats and barley mixed with molasses', pricePerBag: '$21.25', pricePer20: '$20.25', pricePer40: '$19.75', image: 'https://i.imgur.com/p1rmRrQ.png', category_id: 2 },
        { id: 5, name: 'Dry COB', description: 'Rolled corn, oats and barley', pricePerBag: '$21.25', pricePer20: '$20.25', pricePer40: '$19.75', image: 'https://i.imgur.com/p1rmRrQ.png', category_id: 2 },
        { id: 6, name: 'Mare and Foal', description: 'Specialty supplement for nursing mares and foals', pricePerBag: '$21.75', pricePer20: '$20.75', pricePer40: '$20.25', image: 'https://i.imgur.com/vDuFJnP.png', category_id: 2 },
        { id: 7, name: 'Mountaineer', description: 'High performance trail horse grain', pricePerBag: '$22.25', pricePer20: '$21.25', pricePer40: '$20.75', image: 'https://i.imgur.com/P0i6SgJ.png', category_id: 2 },
        { id: 8, name: 'Rice Bran', description: 'Natural source of fiber and magnesium', pricePerBag: '$25.00', pricePer20: '$24.00', pricePer40: '$23.50', image: 'https://i.imgur.com/KxzEO7M.png', category_id: 2 },
        { id: 9, name: 'Rolled Oats', description: 'Rolled oats', pricePerBag: '$23.00', pricePer20: '$22.00', pricePer40: '$21.50', image: 'https://i.imgur.com/vqHiTH0.png', category_id: 2 },
        { id: 10, name: 'Senior Horse', description: 'Specialty feed for senior horses', pricePerBag: '$23.25', pricePer20: '$22.25', pricePer40: '$21.75', image: 'https://i.imgur.com/vtpECT4.png', category_id: 2 },
        { id: 11, name: 'Sterling Horse', description: 'For moderately active horses', pricePerBag: '$21.75', pricePer20: '$20.75', pricePer40: '$20.25', image: 'https://i.imgur.com/aqT8RWM.png', category_id: 2 },
        { id: 12, name: 'Wheat Bran', description: 'Natural source of fiber', pricePerBag: '$20.00', pricePer20: '$19.00', pricePer40: '$18.50', image: 'https://i.imgur.com/KxzEO7M.png', category_id: 2 }
      ]);
    });
};

