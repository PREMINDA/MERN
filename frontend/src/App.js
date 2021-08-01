import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import ProductScreen from "./Pages/ProductScreen/ProductScreen";
import CartScreen from "./Pages/CartScreen/CartScreen";
import LoginScreen from "./Pages/LoginScreen/LoginScreen";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/login" component={LoginScreen} />
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
