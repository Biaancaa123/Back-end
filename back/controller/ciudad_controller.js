const { request } = require('express');
const ciudadService = require('../services/ciudad/ciudad_services');

const list = async (req, res) => {
  const ciudad = await ciudadService.list(req.query.q);
  res.send({
    success: true,
    ciudad,
  });
};

const getById = async (req, res) => {
  const ciudad = await ciudadService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado['success'] = true;
  jsonResultado['ciudad'] = ciudad;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const ciudad = await ciudadService.create(req.body);

  res.status(202).send({
    success: true,
    ciudad,
  });
};

const update = async (req, res) => {
  const ciudad = await ciudadService.update(req.body);

  res.status(202).send({
    success: true,
    ciudad,
  });
};

const remove = async (req, res) => {
  const booleanValue = await ciudadService.remove(req.params.id);

  res.status(202).send({
    success: booleanValue,
  });
};
 module.exports={list, getById, create, update, remove}