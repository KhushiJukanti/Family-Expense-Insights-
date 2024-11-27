const savingsOptimization = (req, res) => {
    const { familyIncome, savings, monthlyExpenses, dependents } = req.body;
  
    const idealExpenseRatio = dependents < 3 ? 0.6 : 0.5;
    const idealExpenses = familyIncome * idealExpenseRatio;
  
    const currentSavingsPercentage = ((savings / familyIncome) * 100).toFixed(2);
  
    res.json({
      suggestedSavingsPercentage: dependents < 3 ? '20%' : '25%',
      overspending: monthlyExpenses > idealExpenses ? 'Yes' : 'No',
      message: monthlyExpenses > idealExpenses 
        ? 'You are overspending. Reduce unnecessary expenses.'
        : 'Your spending is within the ideal range.',
      currentSavingsPercentage: `${currentSavingsPercentage}%`
    });
  };
  
  module.exports = { savingsOptimization };
  