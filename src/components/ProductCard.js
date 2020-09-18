import React from 'react';
import StarRatings from 'react-star-ratings'; 


const ProductCard = ({ product }) => {
    
    return (
        <div className="productCard">
            <h3>{product.product_title}</h3>
            <div><img src={product.product_image} /></div>
            <div>{product.product_description}</div>
            <div>Price: {product.product_price} Yards of Linen</div>
            <StarRatings
                rating={product.product_rating}
                starRatingColor='yellow'
                starDimension='5px' 
            />
        </div>


    )
}


export default ProductCard; 