'use strict';

const { QueryInterface } = require("sequelize/types");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await QueryInterface.removeColumn('Users', 'phone_num');
  }
};
