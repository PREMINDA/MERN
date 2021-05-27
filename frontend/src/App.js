import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h3>HELLO WORLD</h3>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
