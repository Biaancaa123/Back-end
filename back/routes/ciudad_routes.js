const express = require('express');
const router = new express.Router();
const ciudadController = require('../controller/ciudad_controller');
const authorizationMiddleware = require('../middware/authorization_midd');

router.get('/', authorizationMiddleware.authorization, ciudadController.list);
router.get('/find/:id', authorizationMiddleware.authorization, ciudadController.getById);
router.post('/create', authorizationMiddleware.authorization, ciudadController.create);
router.put('/update', authorizationMiddleware.authorization, ciudadController.update);
router.delete('/remove/:id', authorizationMiddleware.authorization, ciudadController.remove);

module.exports = router;