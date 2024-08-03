const { Model, DataTypes } = require("sequelize");

class Cnpjs extends Model {
  static init(sequelize) {
    super.init({
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Cnpjs;