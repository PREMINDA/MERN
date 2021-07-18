import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "./../../components/Product/Product";
import { listProducts } from "../../actions/productActions";
import axios from "axios";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <h1>Latest Product</h1>
    </>
  );
}

export default HomeScreen;
