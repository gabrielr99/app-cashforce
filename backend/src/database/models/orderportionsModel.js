const { Model, DataTypes } = require('sequelize');

class Orderportions extends Model {
  static init(sequelize) {
    super.init({
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      availableToMarket: DataTypes.TINYINT,
      orderId: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Orders, { foreignKey: 'orderId', as: 'order' });
  }
}

module.exports = Orderportions;