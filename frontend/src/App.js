// src/App.js

import React from 'react';
import './App.css'
import Dashboard from './Components/Dashboard';
import AddTransactionForm from './Components/AddTransaction';

function App() {
  const familyId = 'FAM001'; // This can be dynamically set

  return (
    <div className='Bg-img'>
      <div>
        <Dashboard familyId={familyId} />
        <AddTransactionForm />
      </div>

    </div>
  );
}

export default App;
