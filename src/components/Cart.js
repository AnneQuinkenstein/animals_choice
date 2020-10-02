import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartTwoToneIcon from "@material-ui/icons/AddShoppingCartTwoTone";
import RemoveShoppingCartTwoToneIcon from "@material-ui/icons/RemoveShoppingCartTwoTone";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";

const useStyles = makeStyles({
  table: {
    width: "50vw",
    fontSize: "1.3rem",
    margin: "auto",
  },
  tableContainer: {
    width: "60vw", 
    margin: "auto",
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: '100%',
      marginTop: '5vh', 
    }
  },
});

function priceRow(qty, unit) {
  return qty * unit;
}

export default function Cart() {
  const {
    cartArray,
    totalPrice,
    removeItem,
    addOneItem,
    removeOneItem,
  } = useContext(AnimalsContext);
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={3}
              style={{ fontSize: "1.2rem" }}
            >
              Details
            </TableCell>
            <TableCell align="right" style={{ fontSize: "1.2rem" }}>
              Price
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: "1.2" }}>Desc</TableCell>
            <TableCell align="right" style={{ fontSize: "1.2rem" }}>
              Qty.
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="center" style={{ fontSize: "1.2rem" }}>
              Unit
            </TableCell>
            <TableCell align="center" style={{ fontSize: "1.2rem" }}>
              Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartArray.map((item) => (
            <TableRow key={item.id}>
              <TableCell style={{ fontSize: "1.2rem", padding: "1vh" }}>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.product_image}
                    style={{ height: "50px" }}
                    alt="pic of products "
                  />
                </Link>
                {item.product_title}
              </TableCell>
              <TableCell align="right" style={{ fontSize: "1rem" }}>
                {item.quantity}
              </TableCell>
              <TableCell align="left">
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => addOneItem(item)}
                  style={{ padding: "5px" }}
                >
                  <AddShoppingCartTwoToneIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => removeOneItem(item)}
                  style={{ padding: "5px" }}
                >
                  <RemoveShoppingCartTwoToneIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => removeItem(item)}
                  style={{ padding: "5px" }}
                >
                  <DeleteForeverTwoToneIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "1rem" }}>
                {item.product_price}
              </TableCell>
              <TableCell align="center" style={{ fontSize: "1rem" }}>
                {priceRow(item.quantity, item.product_price)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4} style={{ fontSize: "1rem" }}>
              Total
            </TableCell>
            <TableCell align="center" style={{ fontSize: "1rem" }}>
              {totalPrice}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
