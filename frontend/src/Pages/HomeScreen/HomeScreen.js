import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./../../components/Product/Product";
import axios from "axios";

function HomeScreen(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products`);
      setProduct(data);
    };
    fetchproduct();
  }, []);
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
