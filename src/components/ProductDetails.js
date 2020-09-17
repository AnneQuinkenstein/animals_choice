import React from 'react';
import StarRatings from 'react-star-ratings';
import { useParams } from 'react-router';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
  
    const matchProduct = products.find((product) => (product.id === +id))
  
    return (
        <div>
                <>
                    <div>{matchProduct.product_title}</div>
                    <div><img src={matchProduct.product_image} /></div>
                    <div>{matchProduct.product_description}</div>
                    <div>{matchProduct.product_price} Bottlecaps</div>
                    <StarRatings
                        rating={matchProduct.product_rating}
                        starRatingColor='yellow'
                        starDimension='15px'
                    />
                </>
        </div>
    )
}

export default ProductDetails; 