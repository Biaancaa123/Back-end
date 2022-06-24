const { sequelize } = require('../services/bd_app');
/*const {UsuarioModel} = require('../../models/usuario_models');
const { QueryTypes } = require('sequelize');*/

const authorization = async (request, response, next) => {
    
    const token = request.headers['authorization'];
    
    //Primero verificar si ya existe el token en bd


    console.log('Headers Auth', request.headers['authorization']);
    
    let loginResult = await sequelize.query('SELECT id, name, token FROM users WHERE token = :t', {replacements: {t : token}});

    loginResult = (loginResult && loginResult[0]) ? loginResult[0]:[];

    if(loginResult && loginResult.length > 0){
        request.usuarioId = loginResult[0].id;
        next();
    }else{
        //throw new Error('Error');
        response.send({
            success: false,
            error: 'No se pudo autenticar',
        });
    }
};


module.exports = {authorization};