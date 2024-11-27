const mongoose = require('mongoose');

const FamilySchema = new mongoose.Schema({
  familyId: { type: String, required: true },
  memberId: { type: String, required: true },
  transactionDate: { type: Date, required: true },
  category: String,
  amount: Number,
  income: Number,
  savings: Number,
  monthlyExpenses: Number,
  loanPayments: Number,
  creditCardSpending: Number,
  dependents: Number,
  financialGoalsMet: Number,
});

module.exports = mongoose.model('Family', FamilySchema);
