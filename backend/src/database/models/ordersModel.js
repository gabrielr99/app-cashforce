const { Model, DataTypes } = require('sequelize');

class Orders extends Model {
  static init(sequelize) {
    super.init({
      orderNfId: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      orderPath: DataTypes.STRING,
      orderFileName: DataTypes.STRING,
      orderOriginalName: DataTypes.STRING,
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
      cnpjId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      providerId: DataTypes.INTEGER,
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
    this.belongsTo(models.Buyers, { foreignKey: 'buyerId', as: 'buyer' });
  }
}

module.exports = Orders;