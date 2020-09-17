import React, { useEffect, useState}from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails'; 

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
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id"  element={ products && <ProductDetails products={products}/> }/>   
      </Routes>
    </div>
  );
}

export default App;
