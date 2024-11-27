// controllers/categoryAnalysisController.js

const Family = require('../models/family');

// Function to perform Category-Wise Analysis
exports.categoryWiseAnalysis = async (req, res) => {
  const { familyId } = req.body; // Family ID is needed to fetch transactions for a specific family

  if (!familyId) {
    return res.status(400).json({ message: "Family ID is required" });
  }

  try {
    // Fetch family data based on familyId and include the transactions field
    const family = await Family.find({ familyId }); // Assuming you need to fetch multiple family members, or you can use findOne if only one family exists.
    
    if (!family || family.length === 0) {
      return res.status(404).json({ message: "Family not found" });
    }

    // Initialize variables to track expenses by category
    const categoryExpenses = {};
    let totalExpenses = 0;

    // Loop through all the family records and sum up expenses per category
    family.forEach(member => {
      if (member.amount && member.category) {
        totalExpenses += member.amount; // Accumulate total expenses
        // Group expenses by category
        if (categoryExpenses[member.category]) {
          categoryExpenses[member.category] += member.amount;
        } else {
          categoryExpenses[member.category] = member.amount;
        }
      }
    });

    if (totalExpenses === 0) {
      return res.status(400).json({ message: "No valid expenses found in transactions" });
    }

    // Find the most overspent category
    let mostOverspentCategory = '';
    let maxExpense = 0;
    for (const category in categoryExpenses) {
      if (categoryExpenses[category] > maxExpense) {
        maxExpense = categoryExpenses[category];
        mostOverspentCategory = category;
      }
    }

    // Suggest a percentage reduction in the most overspent category
    const percentageReduction = 10; // Suggest 10% reduction by default
    const suggestedReductionAmount = (categoryExpenses[mostOverspentCategory] * percentageReduction) / 100;

    // Respond with the analysis
    res.status(200).json({
      totalExpenses,
      mostOverspentCategory,
      maxExpense,
      suggestedReductionAmount,
      percentageReduction,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
