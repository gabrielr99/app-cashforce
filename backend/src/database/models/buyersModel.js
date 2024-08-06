const { Model, DataTypes } = require('sequelize');

class Buyers extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cashforceTax: DataTypes.STRING,
      responsibleName: DataTypes.STRING,
      responsibleEmail: DataTypes.STRING,
      responsiblePosition: DataTypes.STRING,
      responsiblePhone: DataTypes.STRING,
      responsibleMobile: DataTypes.STRING,
      website: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      cnpjId: DataTypes.INTEGER,
      confirm: DataTypes.TINYINT,
      email: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Orders, { foreignKey: 'buyerId', as: 'orders' });
    this.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
  }
}

module.exports = Buyers;
