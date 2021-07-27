import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { addToCart } from "../../actions/cartAction";
import { CART_ADD_ITEM } from "../../constant/cartConstant";
import Message from "../../components/message/Message";

const CartScreen = ({ location, match, history }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const cart = useSelector((state) => state.cart);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const { cartItems } = cart;

  console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length == 0 ? (
          <Message>Your Cart is Empty</Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col>${item.price}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
