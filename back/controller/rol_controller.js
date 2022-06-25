const { request } = require('express');
const rolService = require('../services/rolUsuario/rol_services');

const list = async (req, res) => {
  const rol = await rolService.list(req.query.q);
  res.send({
    success: true,
    rol,
  });
};

const getById = async (req, res) => {
  const rol = await rolService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado['success'] = true;
  jsonResultado['rol'] = rol;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const rol = await rolService.create(req.body);

  res.status(202).send({
    success: true,
    rol,
  });
};

const update = async (req, res) => {
  console.log(req.body)
  const rol = await rolService.update(req.body);

  res.status(202).send({
    success: true,
    rol,
  });
};

const remove = async (req, res) => {
  const booleanValue = await rolService.remove(req.params.id);

  res.status(202).send({
    success: booleanValue,
  });
};
 module.exports={list, getById, create, update, remove}