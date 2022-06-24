const {HospitalModel} = require('../../models/hospital_models');

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const hospitalModelResult = await HospitalModel.findAll();

  const hospitalArray = [];

  hospitalModelResult.forEach((hospital) =>
    hospitalArray.push(hospital.dataValues),
  );

  return hospitalArray;
};

const getById = async (codigo) => {
  const hospitalModelResult = await HospitalModel.findByPk(codigo);

  if (hospitalModelResult) {
    return hospitalModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {
  const hospitalModelResult = await HospitalModel.create(data);

  if (hospitalModelResult) {
    return hospitalModelResult.dataValues;
  } else {
    return null;
  }
};

const update = async (data) => {
  const hospitalModelCount = await HospitalModel.update(data, {
    where: {
      id_hos: data.id_hos,
    },
  });

  if (hospitalModelCount > 0) {
    const hospitalModelResult = await HospitalModel.findByPk(data.id_hos);
    return hospitalModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (codigo) => {
  const hospitalModelCount = await HospitalModel.destroy({
    where: {
      id_hos: codigo,
    },
  });

  if (hospitalModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {list, getById, create, update, remove};