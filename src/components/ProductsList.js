import React from 'react';
import ProductCard from './ProductCard'; 


const ProductsList = ({ products }) => {
  return (
    <div>
      { products.map(product => <ProductCard product={product} />) }
    </div>
  );
}

export default ProductsList; 