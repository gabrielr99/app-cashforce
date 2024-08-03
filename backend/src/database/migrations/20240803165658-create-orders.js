'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING,
        unique: true
      },
      orderFileName: {
        type: Sequelize.STRING,
        unique: true
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        unique: true
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: { model: 'cnpjs', key: 'id' }
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: { model: 'buyers', key: 'id' }
      },
      providerId: {
        type: Sequelize.INTEGER,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
