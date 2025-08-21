import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AboutImg from "../../assets/images/about-us.jpg"

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
                <Nav.Link href="/about" className="nav-link">About Us</Nav.Link>
                <Nav.Link href="#blog" className="nav-link">Blog</Nav.Link>
                <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
                <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      <main>
        {/* Hero section  */}
        <section className="banner-section">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Sarah Constranction</span>
                <h1>Creating dreams with <br/>precision and excellence.</h1>
                <p>We excel at transforming visions into strong foundations and timeless structures that stand the test of time.<br/>Strong foundations, lasting impressions—this is what we build for you.</p>

                <div className="mt-4">
                    <button className="btn btn-primary">Contact Now</button>
                    <button className="btn btn-secondary ms-2">View Projects</button>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        {/* About us section start */}
        <section className="about-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} className="w-100"></img>
                        
                    </div>
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>Sarah constraction </h2>
                       <p>We believe every project is unique, and every client deserves personalized solutions. At Sarah Construction, we listen carefully to your needs and transform them into structures that reflect your vision.</p>
<p>Our commitment to quality, integrity, and transparency ensures a smooth and stress-free construction experience. With us, your dream project is in capable hands.</p>

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
