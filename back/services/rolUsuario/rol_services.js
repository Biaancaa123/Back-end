const {rolModel} = require('../../models/rol_models');
const { sequelize } = require('../bd_app');

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const rolModelResult = await rolModel.findAll();

  const rolArray = [];

  rolModelResult.forEach((rol) =>
  rolArray.push(rol.dataValues),
  );

  return rolArray;
};

const getById = async (codigo) => {
  const rolModelResult = await rolModel.findByPk(codigo);

  if (rolModelResult) {
    return rolModelResult.dataValues;
  } else {
    return null;
  }
};

const create = async (data) => {

  console.log("entra");
  let result = await sequelize.query(
    `INSERT INTO rolusuario (fecha, descripcion, usuario) VALUES (:f,:d, :u) returning id`, {
        replacements: {
            id:data.id,
            f:data.fecha,
            d:data.descripcion,
            u:data.usuario
  
        },
    }
);
  if (result) {
    console.log(result[0][0]);
    return result[0][0].id;
  } else {
    console.log("Fail");
    return null;
  }
};

const update = async (data) => {
  console.log(data)

  let result = await sequelize.query(
    `UPDATE public.rolusuario
    SET  fecha=:f, descripcion=:d, usuario=:u
    WHERE id=:id;`, {
        replacements: {
            id:data.id,
            f:data.fecha,
            d:data.descripcion,
            u:data.usuario
  
        },
    }
);



  if (result > 0) {
    const rolModelResult = await rolModel.findByPk(data.id_rol);
    return rolModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (codigo) => {
  let result = await sequelize.query(
    `DELETE FROM public.rolusuario
    WHERE id=:id;`, {
        replacements: {
            id:parseInt (codigo)
  
        },
    }
);
  

  if (result ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {list, getById, create, update, remove};