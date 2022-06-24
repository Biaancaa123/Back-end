const { request } = require('express');
const hospitalService = require('../services/hospital/hospital_services');

const list = async (req, res) => {
  console.log('El id es', req.usuarioId);
  const hospital = await hospitalService.list(req.query.q);
  res.send({
    success: true,
    hospital,
  });
};

const getById = async (req, res) => {
  const hospital = await hospitalService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado['success'] = true;
  jsonResultado['hospital'] = hospital;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const hospital = await hospitalService.create(req.body);

  res.status(202).send({
    success: true,
    hospital,
  });
};

const update = async (req, res) => {
  const hospital = await hospitalService.update(req.body);

  res.status(202).send({
    success: true,
    hospital,
  });
};

const remove = async (req, res) => {
  const booleanValue = await hospitalService.remove(req.params.id);

  res.status(202).send({
    success: booleanValue,
  });
};
 module.exports={list, getById, create, update, remove}