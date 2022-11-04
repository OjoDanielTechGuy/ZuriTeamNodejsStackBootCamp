const router = require('express').Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights)

router.post('/', controller.addFlight);

module.exports = router;