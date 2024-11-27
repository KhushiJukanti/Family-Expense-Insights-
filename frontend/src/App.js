// src/App.js

import React from 'react';
import './App.css'
import DashBoard from './Components/Dashboard';
import AddTransactionForm from './Components/AddTransactionForm';

function App() {
  const familyId = 'FAM001'; // This can be dynamically set

  return (
    <div className='Bg-img'>
      <div>
        <DashBoard familyId={familyId}/>
        
        <AddTransactionForm/>
      </div>

    </div>
  );
}

export default App;
