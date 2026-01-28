const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/doctorController');

router.post('/requestOrgan',doctorController.requestedOrgan);

module.exports = router;