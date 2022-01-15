import ProductService from "../Service/Products.Service";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getProducts = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.getProducts(values);

    // console.log(data.results);

    dispatch({
      type: TYPES.GET_PRODUCTS,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductGetById = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.getById(values);
    // console.log(data);

    dispatch({
      type: TYPES.GET_PRODUCT_ID,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
