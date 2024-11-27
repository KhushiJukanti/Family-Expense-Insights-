// src/App.js

import React from 'react';
import './App.css'

import AddTransaction from './Components/AddTransaction';
import Dash from './Components/Dashboard';

function App() {
  const familyId = 'FAM001'; // This can be dynamically set

  return (
    <div className='Bg-img'>
      <div>
        <Dash familyId={familyId}/>
        {/* <DashBoard familyId={familyId}/> */}
        
        <AddTransaction/>
      </div>

    </div>
  );
}

export default App;
