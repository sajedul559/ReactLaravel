import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AboutImg from "../../assets/images/about-us.jpg"
import ServiceImg from "../../assets/images/construction8.jpg"
import WhyChoseImg1 from "../../assets/images/icon-1.svg"
import WhyChoseImg2 from "../../assets/images/icon-2.svg"
import WhyChoseImg3 from "../../assets/images/icon-3.svg"

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
            <div className="container py-5">
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
        <section className="section-4 py-5">
          <div className="container py-5">
            {/* Section Header */}
            <div className="section-header text-center mb-5">
              <span>Why Choose Us</span>
              <h2 className="mt-2">Discover Our Wide Variety of Projects</h2>
              <p className="text-muted">
                Created in close partnership with our clients and collaborators, this approach
                merges industry expertise, decades of experience, innovation, and flexibility
                to consistently deliver excellence.
              </p>
            </div>

            {/* Cards Row */}
            <div className="row pt-4">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow border-0 p-4 h-100 text-center">
                  <div className="card-icon mb-3">
                    <img src={ WhyChoseImg1 } alt="Cutting-Edge Solutions" />
                  </div>
                  <div className="card-title">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p className="text-muted">
                    We deliver innovative solutions that combine creativity and technology to meet
                    the modern challenges of every industry.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow border-0 p-4 h-100 text-center">
                  <div className="card-icon mb-3">
                    <img src={WhyChoseImg2} alt="Trusted Expertise" />
                  </div>
                  <div className="card-title">
                    <h3>Trusted Expertise</h3>
                  </div>
                  <p className="text-muted">
                    With decades of experience, we provide reliable guidance, ensuring
                    our clients achieve lasting success.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow border-0 p-4 h-100 text-center">
                  <div className="card-icon mb-3">
                    <img src={WhyChoseImg3} alt="Client-Centered Approach" />
                  </div>
                  <div className="card-title">
                    <h3>Client-Centered Approach</h3>
                  </div>
                  <p className="text-muted">
                    We work hand-in-hand with our clients, ensuring that every project
                    is tailored to meet unique needs and exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section bg-light py-5">
           <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Sevices</span>
              <h2>Our construction services</h2>
              <p>We offers a divery way of construction service,
                spanning, recedential, commercial and house.
              </p>

            </div>
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100"></img>

                    <div className="service-body">
                      <div className="service-title">
                         <h3>Specially Constraction</h3>
                      </div>
                      <div className="service-content">
                          <p>We offers a divery way of construction service,
                        spanning, recedential, commercial and house.
                      </p>
                                          <button className="btn btn-primary">Contact Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100"></img>

                    <div className="service-body">
                      <div className="service-title">
                         <h3>Specially Constraction</h3>
                      </div>
                      <div className="service-content">
                          <p>We offers a divery way of construction service,
                        spanning, recedential, commercial and house.
                      </p>
                                          <button className="btn btn-primary">Contact Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100"></img>

                    <div className="service-body">
                      <div className="service-title">
                         <h3>Specially Constraction</h3>
                      </div>
                      <div className="service-content">
                          <p>We offers a divery way of construction service,
                        spanning, recedential, commercial and house.
                      </p>
                                          <button className="btn btn-primary">Contact Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100"></img>

                    <div className="service-body">
                      <div className="service-title">
                         <h3>Specially Constraction</h3>
                      </div>
                      <div className="service-content">
                          <p>We offers a divery way of construction service,
                        spanning, recedential, commercial and house.
                      </p>
                                          <button className="btn btn-primary">Contact Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </section>
          <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Sarah Constraction</h3>
                        <div className="pe-5">
                        <p>tjjeklr fjsdklfl ffjsdfl sdkfjsl sfklsf skl fsklfjsdfsl jklfjslfjslfjsl fjiksfjls fflksjflsjflslffkls flfjl f</p>

                        </div>

                    </div>
                    <div className="col-md-3">
                        <h3>Our Services</h3>
                        <ul>
                          <li><a href="#"> Specially Constraction</a></li>
                          <li><a href="#"> Specially Constraction</a></li>
                          <li><a href="#"> Specially Constraction</a></li>
                          <li><a href="#"> Specially Constraction</a></li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <h3>Quick Links</h3>
                         <ul>
                          <li><a href="#"> About Us</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Blogs</a></li>
                          <li><a href="#">Projects</a></li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                         <ul>
                          <li><a href="#"> About Us</a></li>
                          <li><a href="#">Our Services</a></li>
                          
                        </ul>

                    </div>
                </div>
                <hr/>
                <p className="text-center">All rights resrved 2025 @ <b>SarahIT</b></p>
            </div>
          </footer>
      </main>

    
    </>
  );
};

export default Home;
