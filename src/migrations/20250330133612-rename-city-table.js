'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // If you don't actually want to rename, comment this out
    // await queryInterface.renameTable('cities', 'City');
  },

  async down(queryInterface, Sequelize) {
    // Undo operation should match the up() function
    // await queryInterface.renameTable('City', 'cities');
  }
};
