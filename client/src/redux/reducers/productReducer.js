// url=https://github.com/Soldier480/Flipkart-clone/blob/master/client/src/redux/reducers/productReducer.js
import * as actionType from '../constants/productConstant.js'

const initialState = { products: [], loading: false, error: null };

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: Array.isArray(action.payload) ? action.payload : [], loading: false, error: null };
    case actionType.GET_PRODUCTS_FAIL:
      return { products: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };
    default:
      return state;
  }
};
