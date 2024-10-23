exports.seed = function (knex) {
  return knex.transaction(async (trx) => {
    // Seed data for the 'categories' table
    await trx('categories').del();
    const categories = await trx('categories').insert([
      { categoryName: 'Cattle', bannerImg: 'https://extension.illinois.edu/sites/default/files/styles/2_1_banner/public/2023-03/GettyImages-1167064450.jpg?itok=oWyPB8UY' },
      { categoryName: 'Swine', bannerImg: 'https://example.com/swine-banner.jpg' }, // Replace with actual Swine banner URL
      // Add other categories if necessary...
    ]).returning('*'); // Return the inserted rows to use their ids

    // Map category names to their corresponding IDs
    const categoryMap = {};
    categories.forEach(category => {
      categoryMap[category.categoryName] = category.id;
    });

    // Seed data for the 'Cattle' table
    await trx('Cattle').del();
    await trx('Cattle').insert([
      {
        name: 'Cow',
        description: 'A cow for testing',
        pricePerBag: '50.00',
        pricePer20: '900.00',
        pricePer40: '1600.00',
        image: 'cow.jpg',
        category_id: categoryMap['Cattle'] // Reference the Cattle category id
      },
      {
        name: 'Bull',
        description: 'A bull for testing',
        pricePerBag: '55.00',
        pricePer20: '950.00',
        pricePer40: '1700.00',
        image: 'bull.jpg',
        category_id: categoryMap['Cattle'] // Reference the Cattle category id
      },
      {
        name: 'Calf',
        description: 'A calf for testing',
        pricePerBag: '45.00',
        pricePer20: '850.00',
        pricePer40: '1500.00',
        image: 'calf.jpg',
        category_id: categoryMap['Cattle'] // Reference the Cattle category id
      }
    ]);

    // Seed data for the 'Swine' table
    await trx('Swine').del();
    await trx('Swine').insert([
      {
        name: 'Pig',
        description: 'A pig for testing',
        pricePerBag: '40.00',
        pricePer20: '750.00',
        pricePer40: '1300.00',
        image: 'pig.jpg',
        category_id: categoryMap['Swine'] // Reference the Swine category id
      },
      {
        name: 'Sow',
        description: 'A sow for testing',
        pricePerBag: '42.00',
        pricePer20: '770.00',
        pricePer40: '1350.00',
        image: 'sow.jpg',
        category_id: categoryMap['Swine'] // Reference the Swine category id
      },
      {
        name: 'Boar',
        description: 'A boar for testing',
        pricePerBag: '45.00',
        pricePer20: '800.00',
        pricePer40: '1400.00',
        image: 'boar.jpg',
        category_id: categoryMap['Swine'] // Reference the Swine category id
      }
    ]);
  });
};
