import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { AnimalsContext } from "../contexts/AnimalsContext";

const ProductsList = () => {
  const { products, selectedProducts } = useContext(AnimalsContext);

  const renderProducts = () => {
    if (selectedProducts) {
      return selectedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ));
    } else {
      return (
        products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      );
    }
  };

  return <ul className="productslist">{renderProducts()}</ul>;
};

export default ProductsList;
