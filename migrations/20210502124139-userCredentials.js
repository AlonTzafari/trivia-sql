'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'password', { type: Sequelize.STRING});
    await queryInterface.changeColumn('users', 'name', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'password');
    await queryInterface.changeColumn('users', 'name', { type: Sequelize.STRING });
  }
};
