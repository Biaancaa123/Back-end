
const {DataTypes} = require('sequelize');
const {sequelize} = require('../services/bd_app');

const rolModel = sequelize.define('Rol', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  tableName: 'rolusuario',
  timestamps: false,
});

module.exports = {
  rolModel,
};