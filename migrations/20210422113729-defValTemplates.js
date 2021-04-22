'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('templates', 'createdAt',{ 
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    });

    await queryInterface.changeColumn('templates', 'updatedAt',{ 
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('templates', 'createdAt',{ allowNull: false, type: Sequelize.DATE });
    await queryInterface.changeColumn('templates', 'updatedAt',{ allowNull: false, type: Sequelize.DATE });
  }
};

