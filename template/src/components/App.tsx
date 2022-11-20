import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Item from './Item';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/item/:id' element={<Item/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
  );
}

export default App;
