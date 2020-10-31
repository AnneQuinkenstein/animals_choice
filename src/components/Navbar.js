import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import ToysSelection from './ToysSelection'; 

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
  const { totalPrice } = useContext(AnimalsContext);
  const classes = useStyles();

  return (
    <>
      <nav style={{ width: "100vw" }}>
        <div>
          <div className="logo-wrapper">
            <Typography>
              <Link to="/">Animals Choice</Link>
            </Typography>
          </div>
        </div>
        <ToysSelection />
        <div className="nav-cart">
          <p>
            <mark>Total Price </mark>{" "}
            <div className="totalPrice">&nbsp;{totalPrice}&nbsp;</div>
            <span>
             Yards of Linen &nbsp;&nbsp;
            </span>
          </p>
          <Tooltip title="Cart">
            <Link to="cart">
              <IconButton>
                {" "}
                <ShoppingCartTwoToneIcon className={classes.icon} />{" "}
              </IconButton>
            </Link>
          </Tooltip>
        </div>
      </nav>
      <div className="mediaqueryNav"></div>
    </>
  );
};

export default Navbar;
