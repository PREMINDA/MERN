import { createStore, combineReducers, applyMiddleware } from "redux";
import { productListReducer } from "./reducers/productReducers";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productListReducer,
});

const initalState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
