import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import ProductScreen from "./Pages/ProductScreen/ProductScreen";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/products/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
