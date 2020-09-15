import React, { useEffect, useState}from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import Contact from './components/Contact';

function App() {
  const [ products, setProducts ] = useState(null);
  const [ totalPrice, setTotalPrice ] = useState(0)

  useEffect(() => {
    fetch('https://floating-temple-56492.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <div>
      <Navbar totalPrice={totalPrice}/> 
      <Routes>
        <Route path="/" element={<Home  products={products}/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
