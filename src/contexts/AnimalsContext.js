import React, { createContext, useState, useEffect } from 'react';
import productsdata from '../data';

export const AnimalsContext = createContext();

const AnimalsContextComponent = (props) => {
    const [ products, setProducts ] = useState(null);
    const [ totalPrice, setTotalPrice ] = useState(0); 
    const [ cartArray, setCartArray ] = useState([]);
  
  
    // fetch('https://floating-temple-56492.herokuapp.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
  
    useEffect(() => {
      setProducts(productsdata);
    }, [])
  
    const addToCart = (product) => {
        setCartArray([...cartArray, product])
        console.log(cartArray);
    }

    return (
        <AnimalsContext.Provider value={{ products, totalPrice, addToCart }}>
            {props.children}
        </AnimalsContext.Provider>
    )
}

export default AnimalsContextComponent; 