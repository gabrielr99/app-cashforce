'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.createTable('cnpjs', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        cnpj: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        companyType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cnpjs');
  },
};
