import React from 'react'
import StarRatings from "react-star-ratings";

const ProductInformation = (props) => {
    console.log('props', props);
    return (
        <>
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
        </>
    )
}

export default ProductInformation
