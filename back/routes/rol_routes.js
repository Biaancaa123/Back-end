const express = require('express');
const router = new express.Router();
const rolController = require('../controller/rol_controller');
const authorizationMiddleware = require('../middware/authorization_midd');

router.get('/', authorizationMiddleware.authorization, rolController.list);
router.get('/find/:id', authorizationMiddleware.authorization, rolController.getById);
router.post('/create', authorizationMiddleware.authorization, rolController.create);
router.put('/update', authorizationMiddleware.authorization, rolController.update);
router.delete('/remove/:id', authorizationMiddleware.authorization, rolController.remove);

module.exports = router;