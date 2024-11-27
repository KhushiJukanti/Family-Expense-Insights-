// src/App.js

import React from 'react';
import './App.css'

import Dashboard from './Components/Dashboard';
import AddTransaction from './Components/AddTransaction';

function App() {
  const familyId = 'FAM001'; // This can be dynamically set

  return (
    <div className='Bg-img'>
      <div>
        <Dashboard familyId={familyId}/>
        {/* <DashBoard familyId={familyId}/> */}
        
        <AddTransaction/>
      </div>

    </div>
  );
}

export default App;
