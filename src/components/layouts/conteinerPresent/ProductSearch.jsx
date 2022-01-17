import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, setLoading } from "../../../actions/productActions";
import Cards from "../../utils/cards/Cards";
import SkeletonProgress from "../../utils/progress/Loading";

const ProductSearch = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.ProductReducer);
  //   console.log(products);

  const params = useParams();
  // console.log(params.searchProduct);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getProducts(params.searchProduct));
  }, [dispatch, params]);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={3}>
        {loading ? (
          <Grid container>
            <SkeletonProgress />
          </Grid>
        ) : (
          products.map((card) => <Cards key={card.id} card={card} />)
        )}
      </Grid>
    </Container>
  );
};

export default ProductSearch;
