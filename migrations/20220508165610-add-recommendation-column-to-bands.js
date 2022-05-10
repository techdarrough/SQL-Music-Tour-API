'use strict';
const { DataTypes } = require('sequelize')



module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn('Bands', 'recommendation', {
      type:DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('Bands', 'recommendation')
  }
};
