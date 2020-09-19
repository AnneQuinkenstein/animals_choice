import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {

    return (
        <li className="item-card" style={{ backgroundImage: `url("${product.product_image}")` }}>
                <div className="buy-container">
                    <div className="content">
                        <button className="btn">Put in Cart</button>
                    </div>
                </div>
                <div className="informations-container">
                <Link to={`product/${product.id}`}>
                    <h2 className="title">{product.product_title}</h2>
                    <p className="price"> <mark>Price </mark> <span>{product.product_price}</span> Yards of Linen</p>
                    <p className="sub-title">
                        <StarRatings
                            rating={product.product_rating}
                            starRatedColor="orange"
                            starDimension="20px"
                        /></p>
                    <div className="more-information">
                        <div className="info-and-date-container">
                            <p className="disclaimer">{product.product_description}</p>
                        </div>
                    </div>
                    </Link>
                </div>
        </li>
    )
}

export default ProductCard; 