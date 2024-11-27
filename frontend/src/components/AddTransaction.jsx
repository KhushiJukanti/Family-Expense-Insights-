// src/components/AddTransactionForm.js

import React, { useState } from 'react';
import { addTransaction } from './ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTransaction = () => {
  const [formData, setFormData] = useState({familyId:'', memberId: '', category: '', amount: '', transactionDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(formData);
    alert('Transaction added successfully!');
    setFormData({familyId:'', memberId: '', category: '', amount: '', transactionDate: '' });
  };

  return (
    <div className="container mt-5" style={{backgroundColor:'#eaeef2', borderRadius:'10px'}}>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} className="card p-4">
      <div className="form-group">
          <label>Family ID</label>
          <input type="text" className="form-control" name="familyId" value={formData.familyId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Member ID</label>
          <input type="text" className="form-control" name="memberId" value={formData.memberId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" className="form-control" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Transaction Date</label>
          <input type="date" className="form-control" name="transactionDate" value={formData.transactionDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
