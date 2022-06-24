const { sequelize } = require('../bd_app');
const {UsuarioModel} = require('../../models/usuario_models');
const { QueryTypes } = require('sequelize');

const jwt = require('jsonwebtoken');
const { query } = require('express');

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResult = await UsuarioModel.findAll();

  const usuarioArray = [];

  usuarioModelResult.forEach((usuario) =>
    usuarioArray.push(usuario.dataValues),
  );

  return usuarioArray;
};

const getById = async (codigo) => {
  const usuarioModelResult = await UsuarioModel.findByPk(codigo);

  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  const usuarioModelResult = await UsuarioModel.create(data);

  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
  const usuarioModelCount = await UsuarioModel.update(data, {
    where: {
      id_usu: data.id_usu,
    },
  });

  if (usuarioModelCount > 0) {
    const usuarioModelResult = await UsuarioModel.findByPk(data.id_usu);
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (codigo) => {
  const usuarioModelCount = await UsuarioModel.destroy({
    where: {
      id_usu: codigo,
    },
  });

  if (usuarioModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

const login = async (data) => {

  console.log("Login data", data);

  let loginResult = await sequelize.query('SELECT id, name, token FROM users WHERE name = :n AND passwd = :p LIMIT 1', {replacements: {n : data.username, p: data.password}});

  loginResult = (loginResult && loginResult[0]) ? loginResult[0]:[];

  console.log("loginResult", loginResult);

  if(loginResult && loginResult.length > 0){

    if(loginResult[0].token && loginResult[0].id != ''){
      return{
        token: loginResult[0].token
      };
    }else{
      const payload = {
        username : data.username,
        id : loginResult[0].id
      }
  
      console.log("payload", payload);
  
      var token = jwt.sign( payload, 'bianca12');
  
      let tokenResult = await sequelize.query('UPDATE users SET token = :t WHERE id = :i', {replacements: {t : token, i: loginResult[0].id}});
      return{
        token
      };
    }
  }else{
    throw new Error('Datos del usuario no corresponde');
  }

};

const logout = async (usuarioId) => {
  let tokenResult = await sequelize.query('UPDATE users SET token = null WHERE id = :i', {replacements: {i: usuarioId}});
  return ;
};

module.exports = {list, getById, create, update, remove, login, logout};