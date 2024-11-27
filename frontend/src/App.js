// src/App.js

import React from 'react';
import './App.css'
import AddTransactionForm from './Components/AddTransactionForm';
import Dashboard from './Components/Dashboard';

function App() {
  const familyId = 'FAM001'; // This can be dynamically set

  return (
    <div className='Bg-img'>
      <div>
        <Dashboard familyId={familyId}/>
        {/* <DashBoard familyId={familyId}/> */}
        
        <AddTransactionForm/>
      </div>

    </div>
  );
}

export default App;
