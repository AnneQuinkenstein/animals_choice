import React, { useContext } from 'react';
import ProductCard from './ProductCard'; 
import { AnimalsContext } from '../contexts/AnimalsContext';

const ProductsList = () => {
  const { products } = useContext(AnimalsContext);
  
  return (
    <ul className="productslist">
      { products && products.map(product => <ProductCard product={product} key={product.id}/>) }
    </ul>
  );
}

export default ProductsList; 