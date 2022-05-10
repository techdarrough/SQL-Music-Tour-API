'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
    
    await queryInterface.bulkInsert('Bands', [{
      name: 'Tool',
      genre:'Rock',},
      {
        name:'Sublime',
        genre:'Reggie Rock'
      },
      {
        name:'Red Hot Chill Pepper',
        genre:'Alternative Rock'
      }
    
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkDelete('People', [
      {
        name: 'Tool',
        genre:'Rock',},
        {
          name:'Sublime',
          genre:'Reggie Rock'
        },
        {
          name:'Red Hot Chill Pepper',
          genre:'Alternative Rock'
        }
     ], {});
    
  }
};
