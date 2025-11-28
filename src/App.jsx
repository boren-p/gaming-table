import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import HomeClient from './pages/HomeClient';
import HomeAdmin from './pages/HomeAdmin';
import CreateAccount from './pages/CreateAccount';
import Collection from './pages/Collection';

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/create' element={<CreateAccount/>}/>
        <Route path='/client' element={<HomeClient/>}/>
        <Route path='/admin' element={<HomeAdmin/>}/>
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
    </div>
  );
}

export default App;
