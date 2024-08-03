'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      verifationCode: {
        type: Sequelize.STRING
      },
      emailChecked: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cashforceAdm: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
