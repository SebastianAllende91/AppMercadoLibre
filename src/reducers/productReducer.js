import { TYPES } from "../actions/types";

const initialState = {
  products: [],
  productSelect: {},
  loading: true,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case TYPES.GET_PRODUCT_ID:
      return {
        ...state,
        productSelect: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
