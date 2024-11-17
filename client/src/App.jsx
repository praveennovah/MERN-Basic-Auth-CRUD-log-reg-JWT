import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Reg';
import "./App.css"
import HomePage from '../HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
