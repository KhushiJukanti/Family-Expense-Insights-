// src/services/apiService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:7000'; // Adjust based on your backend server URL

export const getFamilyAnalysis = async (familyId) => {
  return await axios.get(`${BASE_URL}/family-analysis/${familyId}`);
};

export const getCategoryAnalysis = async (familyId) => {
  return await axios.post(`${BASE_URL}/category-wise-analysis`, { familyId });
};

export const getSavingsOptimization = async (data) => {
  return await axios.post(`${BASE_URL}/savings-optimization`, data);
};

export const addTransaction = async (transactionData) => {
  return await axios.post(`${BASE_URL}/add-transaction`, transactionData);
};

export const getTransactions = async (familyId) => {
  return await axios.get(`${BASE_URL}/transactions/${familyId}`);
};
