import React from 'react';
import Admin from './Component/Admin';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Weeks from './Component/Weeks';
import Dates from './Component/Dates';


const App = () => {
  return (
    <div className="App">
         <BrowserRouter>
        
         <Routes>  <Route path="/" element={<Admin />} />

          <Route path='Weeks' element={<Weeks/>}/>
          <Route path='Dates' element={<Dates/>}/>
          
        </Routes>
      
         </BrowserRouter>
  
    </div>
  );
};

export default App;
