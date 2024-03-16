import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// import { Provider } from 'react-redux';
import {cartReducer} from "./reducers/cartReducer.js"
import { getProductsReducer ,getProductDetailsReducer} from './reducers/productReducer';

const reducer = combineReducers({
    // cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducer
})

const middleware = [thunk];
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;