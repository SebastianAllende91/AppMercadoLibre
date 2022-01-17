import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { getProductGetById, setLoading } from "../../../actions/productActions";
import ItemThree from "./ItemsCards/ItemThree";
import ItemTwo from "./ItemsCards/ItemTwo";
import ItemOne from "./ItemsCards/ItemOne";
import Loading from "../progress/Loading";
import styles from "./CartItem.module.css";

const CardItem = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ProductReducer);
  // console.log(productSelect);

  const { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getProductGetById(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className={styles.container}>
          <CssBaseline />
          <Box className={styles.boxHeader}>
            <p>
              Back to list |{" "}
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </p>
          </Box>
          <Grid container className={styles.container}>
            <ItemOne />
            <ItemTwo />
            <ItemThree />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default CardItem;
