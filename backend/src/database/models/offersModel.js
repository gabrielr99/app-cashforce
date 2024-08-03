const { Model, DataTypes } = require('sequelize');

class Offers extends Model {
  static init(sequelize) {
    super.init({
      tax: DataTypes.STRING,
      tariff: DataTypes.STRING,
      adValorem: DataTypes.STRING,
      float: DataTypes.STRING,
      iof: DataTypes.STRING,
      expiresIn: DataTypes.DATE,
      paymentStatusSponsor: DataTypes.TINYINT,
      paymentStatusProvider: DataTypes.TINYINT,
      orderId: DataTypes.INTEGER,
      sponsorId: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Orders, { foreignKey: 'orderId', as: 'order' });
    this.belongsTo(models.Sponsors, { foreignKey: 'sponsorId', as: 'sponsor' });
  }
}

module.exports = Offers;