import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { IconButton, Tooltip } from "@material-ui/core";
import cat from "./images/cat.png";
import dog from "./images/dog.png";

const ProductsList = () => {
  const { products, selectedProducts, selectedAnimal, handleCatsChoice, handleDogsChoice, handleAnimalsChoice } = useContext(AnimalsContext);

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

  return <>
         <ul className="select">
          <Tooltip style={{padding: "12px"}} title="Toys for all">
              <li>
                <IconButton onClick={handleAnimalsChoice}>
                TOYS FOR ALL
                </IconButton>
              </li>
            </Tooltip> 
            <Tooltip title="Toys for cats">
              <li>
                <IconButton onClick={handleCatsChoice}>
                  {" "}
                  TOYS FOR <img src={cat} alt={"cat"} style={{ height: `${(selectedAnimal==="cat") ?  "80px" : "60px"}` }}/>
                </IconButton>
              </li>
            </Tooltip>
            <Tooltip title="Toys for dogs">
              <li>
                <IconButton onClick={handleDogsChoice}>
                  {" "}
                  TOYS FOR <img src={dog} alt={"dog"} style={{ height: `${(selectedAnimal==="dog") ?  "80px" : "60px"}` }} />{" "}
                </IconButton>
              </li>
            </Tooltip> 
          </ul>
          <ul className="productslist">
          {renderProducts()}</ul>
          </>
};

export default ProductsList;
