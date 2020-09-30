import React, { useContext } from "react";
import { useParams } from "react-router";
import { AnimalsContext } from "../contexts/AnimalsContext";
import CardComponent from "./CartComponent"; 

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(AnimalsContext);
  

  const matchProduct =
    products && products.find((product) => product.id === +id);

  return (
    <div className="productdetails">
      <CardComponent matchProduct={matchProduct} />
      <div className="item-wrapper">
        <span></span>
        <span></span>
        <span></span>
        <div className="image-wrapper">
          <img
            src={matchProduct.product_image}
            alt={matchProduct.product_title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
