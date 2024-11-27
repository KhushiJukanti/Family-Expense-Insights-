const express = require('express');
const router = express.Router();
const { memberContributionAnalysis } = require('../controllers/familyController');

router.get('/family-analysis/:familyId', memberContributionAnalysis);

module.exports = router;
