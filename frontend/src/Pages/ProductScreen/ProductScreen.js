import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import products from "../../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  console.log(product);

  return (
    <>
      <Link
        style={{ background: "#ebebeb" }}
        className="btn btn-lignt my-3"
        to="/"
      >
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
