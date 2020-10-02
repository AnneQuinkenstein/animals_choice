import React, { useContext } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import CartActionIcons from './CartActionIcons'; 

const ProductCard = (props) => {
 
  return (
    <li
      className="item-card"
      style={{ backgroundImage: `url("${props.product.product_image}")` }}
    >
      <div className="buy-container">
        <div className="content">
          <button className="btn">
          <CartActionIcons product={props.product}/>
          </button>
        </div>
      </div>
      <div className="informations-container">
        <Link to={`product/${props.product.id}`}>
          <h2 className="title">{props.product.product_title}</h2>
          <p className="price">
            {" "}
            <mark>Price </mark>{" "}
            <span>&nbsp;&nbsp;{props.product.product_price}&nbsp;&nbsp;</span>{" "}
            Yards of Linen
          </p>
          <div className="sub-title">
            <StarRatings
              rating={props.product.product_rating}
              starRatedColor="orange"
              starDimension="20px"
            />
          </div>
          <div className="more-information">
            <div className="info-and-date-container">
              <p className="disclaimer">{props.product.product_description}</p>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default ProductCard;
