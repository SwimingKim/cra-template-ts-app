import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
  );
}

export default App;
