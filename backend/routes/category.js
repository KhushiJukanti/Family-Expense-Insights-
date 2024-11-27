
const express = require('express');
const router = express.Router();
const { categoryWiseAnalysis } = require('../controllers/CategorywiseAnalysis');

// API route for category-wise analysis
router.post('/category-wise-analysis', categoryWiseAnalysis);

module.exports = router;
