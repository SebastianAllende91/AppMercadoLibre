import React, { useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cleanCart,
  delFromCart,
  setLoading,
} from "../../actions/productActions";
import AlertUtils from "../utils/alerts/AlertUtils";

const CartProducts = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.ProductReducer);
  console.log(cart);
  let total = 0;

  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    total += element.price;
    console.log(total);
  }

  useEffect(() => {
    dispatch(setLoading());
  }, [dispatch, cart]);

  return (
    <Container maxWidth="lg" style={{ height: "80vh", padding: "3% 0" }}>
      <TableContainer component={Paper}>
        {cart.length > 0 ? (
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Nombre</TableCell>

                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Cantidad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={row.thumbnail}
                      alt={row.title}
                      height={150}
                      width={150}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <h3>{row.title}</h3>
                  </TableCell>
                  <TableCell align="center">
                    ${row.price * row.quantity}
                  </TableCell>
                  <TableCell align="center">
                    {row.quantity > 1 && (
                      <Button onClick={() => dispatch(delFromCart(row.id))}>
                        -
                      </Button>
                    )}{" "}
                    {row.quantity}{" "}
                    <Button onClick={() => dispatch(addToCart(row.id))}>
                      +
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <AlertUtils
            LABEL={"No tienes ningun producto agregado al carrito ."}
            TYPE={"error"}
          />
        )}
        {cart.length > 0 && (
          <Grid>
            <Button
              variant="contained"
              style={{ margin: "5px" }}
              onClick={() => dispatch(cleanCart())}
            >
              Vaciar Carrito
            </Button>
            <Button variant="contained" style={{ margin: "5px" }}>
              Continuar compra
            </Button>
          </Grid>
        )}
      </TableContainer>
    </Container>
  );
};

export default CartProducts;
