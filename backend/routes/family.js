const express = require('express');
const router = express.Router();
const { memberContributionAnalysis } = require('../controllers/familycontrollers');

router.get('/family-analysis/:familyId', memberContributionAnalysis);

module.exports = router;
