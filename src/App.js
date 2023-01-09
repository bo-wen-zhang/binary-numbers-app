import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import BinaryToDenary from './BinaryToDenary';
import DenaryToBinary from './DenaryToBinary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  const unsignedPlaceValues = [128, 64, 32, 16, 8, 4, 2, 1];
  const signedPlaceValues = [-128, 64, 32, 16, 8, 4, 2, 1];
  return (

    <Router>
    <Navbar />
    <Routes>
      <Route path='/binary-numbers-app/' exact element={<Home/>} />
      <Route path='/binary-numbers-app/about' element={<About/>} />
      <Route path='/binary-numbers-app/unsigned-binary-int' element={<BinaryToDenary key="unsigned" decimalPlaceValues={unsignedPlaceValues}/>} />
      <Route path='/binary-numbers-app/two-s-complement' element={<BinaryToDenary key="two-s-complement" decimalPlaceValues={signedPlaceValues}/>} />
      <Route path='/binary-numbers-app/denary-to-binary' element={<DenaryToBinary/>}/>
    </Routes>
    </Router>
  );
}

