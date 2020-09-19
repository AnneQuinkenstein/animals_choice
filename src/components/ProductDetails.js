import React from 'react';
import StarRatings from 'react-star-ratings';
import { useParams } from 'react-router';

const ProductDetails = ({ products }) => {
    const { id } = useParams();

    const matchProduct = products.find((product) => (product.id === +id))

    return (
        <div className="productdetails">
            <div className="info-wrapper">
                <h1>{matchProduct.product_title}</h1>
                <p>{matchProduct.product_description}</p>
                <div>
                   <StarRatings
                    rating={matchProduct.product_rating}
                    starRatedColor="orange"
                    starDimension="20px"
                />  
                </div>
                <p><mark>Price </mark><span>&nbsp;&nbsp;{matchProduct.product_price}&nbsp;&nbsp;</span>   Yards of Linen</p>
            </div>
            <div className="item-wrapper">
                <span></span>
                <span></span>
                <span></span>
                <div className="image-wrapper">
                    <img src={matchProduct.product_image} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails; 