import React from 'react';
import ProductCard from './ProductCard'; 
import { Link } from 'react-router-dom'; 


const ProductsList = ({ products }) => {
  return (
    <div className="productslist">
      { products.map(product => <Link to={`product/${product.id}`}><ProductCard product={product} /></Link>) }
    </div>
  );
}

export default ProductsList; 