import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

const useStyles = makeStyles({
  icon: {
    fontSize: "60px",
    "@media (max-width:768px)": {
      // eslint-disable-line no-useless-computed-key
      fontSize: "40px",
    },
  },
});

const Navbar = () => {
  const { selectedAnimal, totalPrice, handleCatsChoice, handleDogsChoice, handleAnimalsChoice } = useContext(AnimalsContext);
  const classes = useStyles();

  return (
    <>
      <nav style={{ width: "100vw" }}>
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
                    <HomeTwoToneIcon className={classes.icon} />{" "}
                  </IconButton>
                </Link>
              </li>
            </Tooltip>
          </ul>
          <ul>
          <Tooltip title="Cart">
              <li>
                <Link to="cart">
                  <IconButton>
                    {" "}
                    <ShoppingCartTwoToneIcon className={classes.icon} />{" "}
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
      <div className="mediaqueryNav"></div>
    </>
  );
};

export default Navbar;
