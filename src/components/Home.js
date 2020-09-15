import React from 'react';
import ProductsList from './ProductsList';

const Home = ({ products }) => {
    return (
        <div>
            {products && <ProductsList products={products} />}
        </div>
    )
}

export default Home; 