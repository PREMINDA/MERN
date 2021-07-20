import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducers";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

const initalState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
