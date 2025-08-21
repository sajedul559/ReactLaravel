import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Home = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className="logo">
              Sarah <span>Constranction</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-link">About Us</Nav.Link>
                <Nav.Link href="#blog" className="nav-link">Blog</Nav.Link>
                <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
                <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      <main>
        <section className="section-1">
          <div className="hero">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Sarah Constranction</span>
                <h1>Creating dreams with <br/>precision and excellence.</h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <h1>Hello Footer</h1>
      </footer>
    </>
  );
};

export default Home;
