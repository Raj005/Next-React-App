const express = require('express');
const router = express.Router();
const { carsRouteHandlers } = require('./routeHandlers');

router.get('/', carsRouteHandlers.getCarsHandler());
router.get('/:id', carsRouteHandlers.getCarByIdHandler());

module.exports = router;
