

const express = require('express');
const router = express.Router();
const { savingsOptimization } = require('../controllers/savingcontrollers');

// API route to calculate savings optimization
router.post('/savings-optimization', savingsOptimization);

module.exports = router;
