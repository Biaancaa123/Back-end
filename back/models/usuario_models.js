
const {DataTypes} = require('sequelize');
const {sequelize} = require('../services/bd_app');

const UsuarioModel = sequelize.define('Usuario', {

  // id_usu: {
  //   autoIncrement: true,
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  // },
  // nombre: {
  //   type: DataTypes.STRING(50),
  //   allowNull: false,
  // },
  // apellido: {
  //   type: DataTypes.STRING(50),
  //   allowNull: false,
  // },
  // email: {
  //   type: DataTypes.STRING(100),
  //   allowNull: false,
  // },
  // pass: {
  //   type: DataTypes.STRING(100),
  //   allowNull: false,
  // },

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  token:{
    type: DataTypes.STRING(250),
    allowNull: false,
  }

}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = {
  UsuarioModel,
};