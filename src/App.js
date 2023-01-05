import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import PositiveBinary from './PositiveBinary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (

    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/positive-binary-integer' element={<PositiveBinary/>} />
    </Routes>
    </Router>
  );
}

