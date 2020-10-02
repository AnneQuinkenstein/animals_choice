import React from "react";
import { Link } from "react-router-dom";
import CartActionIcons from "./CartActionIcons";
import ProductInformation from "./ProductInformation";
import { useMediaPredicate } from "react-media-hook";

const ProductCard = (props) => {
  const phone = useMediaPredicate("(max-width: 768px)");
  return (
    <li
      className="item-card"
      style={{ backgroundImage: `url("${props.product.product_image}")` }}
    >
      <div className="buy-container">
        <div className="content">
          <button className="btn">
            <CartActionIcons product={props.product} />
          </button>
        </div>
      </div>
      <div className="informations-container">
        {!phone && (
          <Link to={`product/${props.product.id}`}>
            <ProductInformation {...props} />
          </Link>
        )}
        {phone && <ProductInformation {...props} />}
      </div>
    </li>
  );
};

export default ProductCard;
