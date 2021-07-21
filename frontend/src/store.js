import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

console.log(cartReducer);

const initalState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
