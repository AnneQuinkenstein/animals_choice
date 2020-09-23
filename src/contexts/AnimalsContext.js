import React, { createContext, useState, useEffect } from 'react';
import productsdata from '../data';

export const AnimalsContext = createContext();

const AnimalsContextComponent = (props) => {
    const [cartArray, setCartArray] = useState([]);
    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);


    // fetch('https://floating-temple-56492.herokuapp.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))

    useEffect(() => {
        setProducts(productsdata);
    }, [])

    // add Product to Cart
    const addToCart = (product) => {
        const addNewProduct = () => {
                product.quantity = 1;
                setCartArray([...cartArray, product]);   
        }
        cartArray.includes(product) ? product.quantity++ : addNewProduct();
        setTotalPrice(totalPrice + product.product_price);    
    }

     //remove Product from Cart
  const removeItem = (item) => {
    setCartArray(products.filter(product => (product.id !== item.id)))
    setTotalPrice(totalPrice - (item.quantity * item.product_price))
  }

return (
    <AnimalsContext.Provider value={{ cartArray, totalPrice, products, addToCart, removeItem }}>
        {props.children}
    </AnimalsContext.Provider>
)
}

export default AnimalsContextComponent; 