// routes/savingsRoutes.js
const express = require('express');
const router = express.Router();
const { savingsOptimization } = require('../controllers/savingsController');

// Savings Optimization - POST
router.post('/savings-optimization', savingsOptimization);

module.exports = router;
