import React from 'react';


const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div>{product.product_title}</div>
            <div><img src={product.product_image} /></div>
            <div>{product.product_description}</div>
            <div>{product.product_rating}</div>
        </div>


    )
}


export default ProductCard; 