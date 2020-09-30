import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

const Navbar = () => {
  const { totalPrice } = useContext(AnimalsContext);

  return (
    <nav>
      <div>
        <div className="logo-wrapper">
          <Tooltip title="Anne Quinkenstein">
            <IconButton>
              <a
                className="logo-img"
                href="https://www.linkedin.com/in/anne-quinkenstein/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0.5 }}
              >
                <img src="/images/logo.png" alt="logo AQ" />{" "}
              </a>
            </IconButton>
          </Tooltip>
          <Typography>
            <Link to="/">Animals Choice</Link>
          </Typography>
        </div>
        <ul>
          <Tooltip title="Home">
            <li>
              <Link to="/">
                <IconButton>
                  {" "}
                  <HomeTwoToneIcon style={{ fontSize: 60 }} />{" "}
                </IconButton>
              </Link>
            </li>
          </Tooltip>
          <Tooltip title="Cart">
            <li>
              <Link to="cart">
                <IconButton>
                  {" "}
                  <ShoppingCartTwoToneIcon style={{ fontSize: 60 }} />{" "}
                </IconButton>
              </Link>
            </li>
          </Tooltip>
        </ul>
      </div>
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
