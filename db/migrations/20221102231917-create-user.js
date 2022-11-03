'use strict';

/** @type {import('sequelize-cli').Migration} */

const { USER_TABLE, UserSchema } = require('../models/user.model');
/*
  ... other models
*/

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    /*
      ... other tables
    */ 
  },

  async down (queryInterface) {
    await queryInterface.drop(USER_TABLE);
  }
};
