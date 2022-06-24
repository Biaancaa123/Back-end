const {DataTypes} = require('sequelize');
const {sequelize} = require('../services/bd_app');

const HospitalModel = sequelize.define('Hospital', {

  id_hos: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre_hos: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

}, {
  tableName: 'hospital',
  timestamps: false,
});

module.exports = {
  HospitalModel,
};