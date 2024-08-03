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
}

module.exports = Orderportions;