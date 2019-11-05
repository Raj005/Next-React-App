const express = require('express');
const router = express.Router();
const { carsRouteHandlers } = require('./routeHandlers');

router.get('/', carsRouteHandlers.getCarHandler());

module.exports = router;
