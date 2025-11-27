import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
