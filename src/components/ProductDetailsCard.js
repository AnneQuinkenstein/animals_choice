import React from "react";
import StarRatings from "react-star-ratings";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CartActionIcons from './CartActionIcons';

const useStyles = makeStyles({
  root: {
    color: "#0a4870",
    width: "32vw",
    margin: "auto",
    backgroundColor: "transparent",
    borderRadius: "20% / 25% 50% 35% 20%",
    padding: "3vh",
    borderRightColor: "transparent",
    boxShadow: "0px 2px 1px -1px #ff501e,0px 1px 1px 0px #ff501e,0px 1px 3px 0px #ff501e",
  },
  title: {
    margin: "auto",
  },
  pos: {
    margin: 12,
  },
  price: {
    fontSize: "1.4rem",
    margin: "5px",
  },
});

export default function ProductDetailsCard({ matchProduct }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          variant="h2"
          component="h3"
          gutterBottom
        >
          {matchProduct.product_title}
        </Typography>
        <Typography variant="h5" component="h2">
          {matchProduct.product_description}
        </Typography>
        <Typography className={classes.pos}>
          <StarRatings
            rating={matchProduct.product_rating}
            starRatedColor="orange"
            starDimension="20px"
          />
        </Typography>
        <Typography className={classes.price} component="p">
          <>Price </>
          <span>&nbsp;&nbsp;{matchProduct.product_price}&nbsp;&nbsp;</span>{" "}
          <>Yards of Linen</>
          <br />
        </Typography>
      </CardContent>
      <CartActionIcons product={matchProduct}/>
    </Card>
  );
}
