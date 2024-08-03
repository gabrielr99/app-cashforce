const { Model, DataTypes } = require("sequelize");

class Cnpjs extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      department: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.TINYINT,
      cashforceAdmin: DataTypes.TINYINT,
    }, {
      sequelize
    })
  }
}

module.exports = Cnpjs;