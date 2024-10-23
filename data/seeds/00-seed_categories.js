exports.seed = function(knex) {
  // Deletes ALL existing entries in the categories table
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, categoryName: 'Cattle', bannerImg: 'https://extension.illinois.edu/sites/default/files/styles/2_1_banner/public/2023-03/GettyImages-1167064450.jpg?itok=oWyPB8UY' },
        { id: 2, categoryName: 'Equine', bannerImg: 'https://www.msd-animal-health.com/wp-content/uploads/sites/2/2021/12/equine-hero-img.jpg' },
        { id: 3, categoryName: 'Poultry', bannerImg: 'https://live-production.wcms.abc-cdn.net.au/930544c4d01ed91830623b2919a3b227?impolicy=wcms_crop_resize&cropH=2208&cropW=3312&xPos=0&yPos=237&width=862&height=575' },
        { id: 4, categoryName: 'Rabbit', bannerImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSkcDr4lBR1T3RPPwHjszsv4FuaZO8YyyWQ&s' },
        { id: 5, categoryName: 'Sheep And Goat', bannerImg: 'https://morningchores.com/wp-content/uploads/2019/11/What-to-Consider-When-Raising-Sheep-and-Goats-Together-FI.jpg' },
        { id: 6, categoryName: 'Straight Grains', bannerImg: 'https://www.richimachinery.com/d/file/p/2021/01-19/eb917e76c69ac901da96043ffa28e8bf.jpg' },
        { id: 7, categoryName: 'Swine', bannerImg: 'https://i.natgeofe.com/k/c2406eb2-7766-448a-9bfd-8a417c1f64c2/pig-babies-feeding.jpg' }
      ]);
    });
};

