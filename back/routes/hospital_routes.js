const express = require('express');
const router = new express.Router();
const hospitalController = require('../controller/hospital_controller');
const authorizationMiddleware = require('../middware/authorization_midd');

router.get('/', authorizationMiddleware.authorization, hospitalController.list);
router.get('/find/:id', authorizationMiddleware.authorization, hospitalController.getById);
router.post('/create', authorizationMiddleware.authorization, hospitalController.create);
router.put('/update', authorizationMiddleware.authorization, hospitalController.update);
router.delete('/remove/:id', authorizationMiddleware.authorization, hospitalController.remove);

module.exports = router;