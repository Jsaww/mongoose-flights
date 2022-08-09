const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flights')

/* GET users listing. */
// endpoint for this is /flights/new
router.get('/new', flightController.new)
// endpoint is /flights
router.post('/', flightController.create)

module.exports = router;
