import React, { useContext } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { AnimalsContext } from '../contexts/AnimalsContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(AnimalsContext);

    const handleClick = () =>{
        addToCart(product)
    }

    return (
        <li className="item-card" style={{ backgroundImage: `url("${product.product_image}")` }}>
                <div className="buy-container">
                    <div className="content">
                        <button className="btn" onClick={handleClick}>Put in Cart</button>
                    </div>
                </div>
                <div className="informations-container">
                <Link to={`product/${product.id}`}>
                    <h2 className="title">{product.product_title}</h2>
                    <p className="price"> <mark>Price </mark> <span>&nbsp;&nbsp;{product.product_price}&nbsp;&nbsp;</span> Yards of Linen</p>
                    <div className="sub-title">
                        <StarRatings
                            rating={product.product_rating}
                            starRatedColor="orange"
                            starDimension="20px"
                        /></div>
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