const {CiudadModel} = require('../../models/ciudad_models');

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const ciudadModelResult = await CiudadModel.findAll();

  const ciudadArray = [];

  ciudadModelResult.forEach((ciudad) =>
  ciudadArray.push(ciudad.dataValues),
  );

  return ciudadArray;
};

const getById = async (codigo) => {
  const ciudadModelResult = await CiudadModel.findByPk(codigo);

  if (ciudadModelResult) {
    return ciudadModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  const ciudadModelResult = await CiudadModel.create(data);

  if (ciudadModelResult) {
    return ciudadModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
  const ciudadModelCount = await CiudadModel.update(data, {
    where: {
      id_ciudad: data.id_ciudad,
    },
  });

  if (ciudadModelCount > 0) {
    const ciudadModelResult = await CiudadModel.findByPk(data.id_ciudad);
    return ciudadModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (codigo) => {
  const ciudadModelCount = await CiudadModel.destroy({
    where: {
      id_ciudad: codigo,
    },
  });

  if (ciudadModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {list, getById, create, update, remove};