import React from "react";
import StarRatings from "react-star-ratings";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '32vw',
    margin:'auto', 
    backgroundColor: 'transparent',
    borderRadius: '200px 0',
    padding: '5vh',
  },
  title: {
    margin: 'auto',
  },
  pos: {
    margin: 12,
  },
  price: {
    fontSize: '1.4rem',
    margin: '5px'
  }
});

export default function SimpleCard({ matchProduct }) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h2" component="h3" gutterBottom>
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
         <span>&nbsp;&nbsp;{matchProduct.product_price}&nbsp;&nbsp;</span> Yards of Linen
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" style={{ fontSize: '1.1rem' }}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
