import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import AnimalsContextComponent from './contexts/AnimalsContext';


function App() {

  return (
    <div className="wrapper">
      <div className="maincontent">
        <AnimalsContextComponent>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Routes>
        </AnimalsContextComponent>
      </div>
      <Footer />
    </div>
  );
}

export default App;
