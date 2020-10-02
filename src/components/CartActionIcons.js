import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ActionIcons from "./CartActionIcons";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import RemoveShoppingCartTwoToneIcon from "@material-ui/icons/RemoveShoppingCartTwoTone";
import AddShoppingCartTwoToneIcon from "@material-ui/icons/AddShoppingCartTwoTone";
import { AnimalsContext } from "../contexts/AnimalsContext";

const CartActionIcons = ({ product }) => {
    const { addToCart, removeOneItem } = useContext(AnimalsContext);

  const handleClick = () => addToCart(product);
  const handleRemove = () => removeOneItem(product);

  return (
    <>
      <CardActions>
        <Button size="medium" style={{ fontSize: "1.1rem" }}>
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
          {`${product.quantity}`}
        </Button>
        <Button
          size="medium"
          style={{ fontSize: "1.1rem" }}
          onClick={handleClick}
        >
          <AddShoppingCartTwoToneIcon />
        </Button>
        <Button
          size="medium"
          style={{ fontSize: "1.1rem" }}
          onClick={handleRemove}
        >
          <RemoveShoppingCartTwoToneIcon />
        </Button>
      </CardActions>
    </>
  );
};

export default CartActionIcons;
