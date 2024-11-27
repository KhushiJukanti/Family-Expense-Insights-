// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import { getFamilyAnalysis, getSavingsOptimization } from './ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dash = ({ familyId }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [memberContributions, setMemberContributions] = useState([]);
  const [savingsStatus, setSavingsStatus] = useState('');
  const [suggestedSavings, setSuggestedSavings] = useState(0);
  
  useEffect(() => {
    fetchFamilyData();
    fetchSavingsData();
  }, [familyId]);

  const fetchFamilyData = async () => {
    const response = await getFamilyAnalysis(familyId);
    setTotalExpenses(response.data.totalExpenses);
    setMemberContributions(response.data.memberContributions);
  };

  const fetchSavingsData = async () => {
    const data = { familyIncome: 10000, savings: 2000, monthlyExpenses: 5000, dependents: 2 };  // Sample data, can be dynamic
    const response = await getSavingsOptimization(data);
    setSavingsStatus(response.data.spendingStatus);
    setSuggestedSavings(response.data.suggestedSavings);
  };

  return (
    <div className="container mb-5" style={{backgroundColor:'#eaeef2', borderRadius:'10px',}}>
      <h2 className="mb-4">Family Dashboard</h2>
      <div className="card p-4">
        <h5>Total Family Expenses: ${totalExpenses}</h5>
        <h6>Member Contributions:</h6>
        <ul className="list-group">
          {memberContributions.map((member, index) => (
            <li key={index} className="list-group-item">
              Member ID: {member.memberId} - Contribution: {member.contribution}
            </li>
          ))}
        </ul>
        <h5 className="mt-3">Savings Status: {savingsStatus}</h5>
        <h6>Suggested Savings: ${suggestedSavings}</h6>
      </div>
    </div>
  );
};

export default Dash;
