import React from 'react';
import ProductCard from './ProductCard'; 


const ProductsList = ({ products }) => {
  return (
    <ul className="productslist">
      { products.map(product => <ProductCard product={product} />) }
    </ul>
  );
}

export default ProductsList; 