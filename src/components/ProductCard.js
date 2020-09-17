import React from 'react';
import StarRatings from 'react-star-ratings'; 


const ProductCard = ({ product }) => {
    
    return (
        <div>
            <div>{product.product_title}</div>
            <div><img src={product.product_image} /></div>
            <div>{product.product_description}</div>
            <div>{product.product_price} Bottlecaps</div>
            <StarRatings
                rating={product.product_rating}
                starRatingColor='yellow'
                starDimension='15px' 
            />
        </div>


    )
}


export default ProductCard; 