import React from "react";
import StarRatings from "react-star-ratings";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CartActionIcons from './CartActionIcons';

const useStyles = makeStyles({
  root: {
    width: "32vw",
    margin: "auto",
    backgroundColor: "transparent",
    borderRadius: "20% / 50% 50% 20% 20%",
    padding: "5vh",
    borderRightColor: "transparent",
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
          <mark>Price </mark>
          <span>&nbsp;&nbsp;{matchProduct.product_price}&nbsp;&nbsp;</span>{" "}
          <span>Yards of Linen</span>
          <br />
        </Typography>
      </CardContent>
      <CartActionIcons product={matchProduct}/>
    </Card>
  );
}
