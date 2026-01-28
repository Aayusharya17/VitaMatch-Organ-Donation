const express = require('express');
const router = express.Router();
const donorController = require('../../controllers/donorController');

router.post('/donateOrgan',donorController.createDonation);

module.exports = router;