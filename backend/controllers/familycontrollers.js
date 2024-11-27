const Family = require('../models/family');

// 1. Member Contribution Analysis
const memberContributionAnalysis = async (req, res) => {
  const { familyId } = req.params;  // Changed to GET method to pass `familyId` as a route parameter
  try {
    const transactions = await Family.find({ familyId });
    if (transactions.length === 0) {
      return res.status(404).send('No transactions found for the given family.');
    }

    let totalExpenses = 0;
    const memberExpenses = {};

    transactions.forEach(({ memberId, amount }) => {
      totalExpenses += amount;
      memberExpenses[memberId] = (memberExpenses[memberId] || 0) + amount;
    });

    const memberContributions = Object.entries(memberExpenses).map(([memberId, amount]) => ({
      memberId,
      contribution: ((amount / totalExpenses) * 100).toFixed(2) + '%'
    }));

    const highestSpender = Object.keys(memberExpenses).reduce((a, b) =>
      memberExpenses[a] > memberExpenses[b] ? a : b
    );

    res.json({ totalExpenses, memberContributions, highestSpender });
  } catch (error) {
    res.status(500).send('Error analyzing data');
  }
};

module.exports = { memberContributionAnalysis };
