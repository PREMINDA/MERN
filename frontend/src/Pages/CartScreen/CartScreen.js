import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/cartAction";

const CartScreen = ({ location, match, history }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  return (
    <div>
      <h2>Cart Screen</h2>
    </div>
  );
};

export default CartScreen;
