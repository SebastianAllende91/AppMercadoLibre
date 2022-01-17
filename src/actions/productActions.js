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

export const addToCart = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const delFromCart =
  (id, all = false) =>
  async (dispatch) => {
    try {
      console.log(id, all);
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const cleanCart = () => async (dispatch) => {
  try {
    dispatch({ type: TYPES.CLEAR_CART });
  } catch (error) {
    console.log(error);
  }
};
