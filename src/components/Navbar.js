import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { BottomNavigationAction, Tooltip } from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const Navbar = () => {
  const { totalPrice } = useContext(AnimalsContext);

  return (
    <nav>
      <div className="logo-wrapper">
        <a href="https://www.linkedin.com/in/anne-quinkenstein/">
          <img src="/images/logo.png" alt="logo AQ" />{" "}
        </a>
        <p>Animals Choice</p>
      </div>
      <ul>
        <Tooltip title="Home">
          <li>
            <Link to="/">
              <BottomNavigationAction icon={<HomeTwoToneIcon style={{ fontSize: 60 }}/>} label="Home" />
            </Link>
          </li>
        </Tooltip>
        <Tooltip title="Cart">
          <li>
            <Link to="cart">
              <BottomNavigationAction icon={<ShoppingCartTwoToneIcon style={{ fontSize: 60 }}/>} label="Cart" />
            </Link>
          </li>
        </Tooltip>
      </ul>
      <div className="nav-cart">
        <p>
          <mark>Total Price </mark>{" "}
          <span>&nbsp;&nbsp;{totalPrice}&nbsp;&nbsp; Yards of Linen </span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
