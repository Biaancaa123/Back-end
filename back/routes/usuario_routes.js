const express = require('express');
const router = new express.Router();
const usuarioController = require('../controller/usuario_controller');
const authorizationMiddleware = require('../middware/authorization_midd');

router.get('/', authorizationMiddleware.authorization, usuarioController.list);
router.get('/find/:id', authorizationMiddleware.authorization, usuarioController.getById);
router.post('/create',authorizationMiddleware.authorization, usuarioController.create);
router.put('/update', authorizationMiddleware.authorization, usuarioController.update);
router.delete('/remove/:id', authorizationMiddleware.authorization, usuarioController.remove);
router.post('/login', usuarioController.login);
router.post('/logout', authorizationMiddleware.authorization, usuarioController.logout);

module.exports = router;
