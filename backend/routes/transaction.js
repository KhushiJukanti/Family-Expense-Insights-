const express = require('express');
const router = express.Router();
const { addTransaction, getTransactionsByFamilyId } = require('../controllers/transactioncontrollers');

router.post('/add-transaction', addTransaction);

router.get('/transactions/:familyId', getTransactionsByFamilyId);

module.exports = router;
