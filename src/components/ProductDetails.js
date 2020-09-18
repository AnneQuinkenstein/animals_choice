import React from 'react';
import StarRatings from 'react-star-ratings';
import { useParams } from 'react-router';

const ProductDetails = ({ products }) => {
    const { id } = useParams();

    const matchProduct = products.find((product) => (product.id === +id))

    return (
        <div className="productdetails">
            <div>{matchProduct.product_title}</div>
            <div className="image-wrapper">
                <span></span>
                <span></span>
                <span></span>
                <img src={matchProduct.product_image} />
            </div>
            <div>{matchProduct.product_description}</div>
            <div>{matchProduct.product_price} Yards of Linen</div>
            <StarRatings
                rating={matchProduct.product_rating}
                starRatedColor="yellow"
                starDimension="20px"
            />
        </div>
    )
}

export default ProductDetails; 