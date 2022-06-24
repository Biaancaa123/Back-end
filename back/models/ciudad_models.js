
const {DataTypes} = require('sequelize');
const {sequelize} = require('../services/bd_app');

const CiudadModel = sequelize.define('Ciudad', {

  id_ciudad: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  ciudad: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

}, {
  tableName: 'ciudad',
  timestamps: false,
});

module.exports = {
  CiudadModel,
};