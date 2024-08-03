'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id: Sequelize.INTEGER,
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tradingName: {
        type: Sequelize.STRING,
      },
      cashforceTax: {
        type: Sequelize.STRING,
      },
      responsibleName: {
        type: Sequelize.STRING,
      },
      responsibleEmail: {
        type: Sequelize.STRING,
      },
      responsiblePosition: {
        type: Sequelize.STRING,
      },
      responsiblePhone: {
        type: Sequelize.STRING,
      },
      responsibleMobile: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.STRING,
      },
      complement: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      situation: {
        type: Sequelize.STRING,
      },
      situationDate: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        type: Sequelize.INTEGER, 
        references: { model: 'cnpjs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      confirm: {
        type: Sequelize.TINYINT,
        defaultValue: 1
      },
      email: {
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};
