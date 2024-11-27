const Family = require('../models/family');

// Add Transaction
const addTransaction = async (req, res) => {
  const { familyId, memberId, category, amount, transactionDate } = req.body;

  try {
    const transaction = new Family({ familyId, memberId, category, amount, transactionDate: new Date(transactionDate) });
    await transaction.save();
    res.status(201).send('Transaction added successfully');
  } catch (error) {
    res.status(500).send('Error adding transaction');
  }
};

// Get All Transactions for a Family
const getTransactionsByFamilyId = async (req, res) => {
  const { familyId } = req.params;

  try {
    const transactions = await Family.find({ familyId });
    if (transactions.length === 0) {
      return res.status(404).send('No transactions found for the given family.');
    }
    res.json(transactions);
  } catch (error) {
    res.status(500).send('Error retrieving transactions');
  }
};

module.exports = { addTransaction, getTransactionsByFamilyId };
