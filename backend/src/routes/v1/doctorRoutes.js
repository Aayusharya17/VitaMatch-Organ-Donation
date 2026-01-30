const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/doctorController');
const {authMiddleware} = require('../../middleware/auth');

router.post('/requestOrgan',authMiddleware,doctorController.requestedOrgan);
router.get('/availableOrgans',authMiddleware,doctorController.findAllAvailable);
router.post("/accept-organ", authMiddleware, doctorController.acceptOrgan);



module.exports = router;