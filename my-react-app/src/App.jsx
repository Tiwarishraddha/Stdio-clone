import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className=" w-screen h-screen top-0 left-0 fixed">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
