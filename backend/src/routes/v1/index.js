const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const donorRoutes = require('./donorRoutes');
const doctorRoutes = require('./doctorRoutes');

router.use('/user',userRoutes);
router.use('/donor',donorRoutes);
router.use('/doctor',doctorRoutes);

module.exports = router