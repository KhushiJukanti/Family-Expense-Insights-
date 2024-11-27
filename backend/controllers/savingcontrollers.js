// const Family = require('../models/family');
exports.savingsOptimization = (req, res) => {
    const { familyIncome, savings, monthlyExpenses, dependents } = req.body;

    if (!familyIncome || !savings || !monthlyExpenses || dependents === undefined) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Suggested savings percentage based on family income (e.g., 20% of income)
    const suggestedSavingsPercentage = 20; // This can be customized based on logic
    const suggestedSavings = (familyIncome * suggestedSavingsPercentage) / 100;

    // Calculate the ideal expense-to-income ratio
    let idealExpenseRatio = 50; // Default base ratio (50% of income)
    idealExpenseRatio += dependents * 5; // For each dependent, add 5% to the ideal ratio

    // Calculate ideal expenses based on the ideal expense ratio
    const idealExpenses = (familyIncome * idealExpenseRatio) / 100;

    // Determine whether the family is overspending or underspending
    let spendingStatus = 'Under budget';
    if (monthlyExpenses > idealExpenses) {
        spendingStatus = 'Overspending';
    } else if (monthlyExpenses < idealExpenses) {
        spendingStatus = 'Underspending';
    }

    // Send response with the calculated results
    res.status(200).json({
        suggestedSavingsPercentage,
        suggestedSavings,
        idealExpenseRatio,
        idealExpenses,
        spendingStatus
    });
};
