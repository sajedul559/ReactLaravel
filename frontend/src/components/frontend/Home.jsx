import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AboutImg from "../../assets/images/about-us.jpg"
import ServiceImg from "../../assets/images/construction7.jpg"
import ServiceImg1 from "../../assets/images/construction9.jpg"

import ServiceImg2 from "../../assets/images/construction10.jpg"
import ServiceImg3 from "../../assets/images/construction121.jpg"

import ProjectImg1 from "../../assets/images/construction1.jpg"
import ProjectImg2 from "../../assets/images/construction2.jpg"
import ProjectImg3 from "../../assets/images/construction3.jpg"
import ProjectImg4 from "../../assets/images/construction4.jpg"

import WhyChoseImg1 from "../../assets/images/icon-1.svg"
import WhyChoseImg2 from "../../assets/images/icon-2.svg"
import WhyChoseImg3 from "../../assets/images/icon-3.svg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
  {
    id: 1,
    name: "Shivani",
    role: "CTO",
    img: "https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942924.jpg",
    text: "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rani",
    role: "DEV",
    img: "https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942613.jpg",
    text: "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohit",
    role: "Developer",
    img: "https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942432.jpg",
    text: "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    id: 4,
    name: "John Doe",
    role: "CEO",
    img: "https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942081.jpg",
    text: "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
];

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
                    <img src={ServiceImg1} alt="" className="w-100"></img>

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
                    <img src={ServiceImg2} alt="" className="w-100"></img>

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
                    <img src={ServiceImg3} alt="" className="w-100"></img>

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
              <span>Our Projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>

            </div>
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImg1} alt="" className="w-100"></img>

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
                    <img src={ProjectImg4} alt="" className="w-100"></img>

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
                    <img src={ProjectImg2} alt="" className="w-100"></img>

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
                    <img src={ProjectImg3} alt="" className="w-100"></img>

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

        <section className="section-5 py-5">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span className="text-uppercase">Testimonials</span>
          <h2 className="mt-2">What people are saying about us</h2>
          <p className="text-muted">
            We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="card shadow border-0 h-100">
                <div className="card-body p-5">
                  {/* Rating */}
                  <div className="rating d-flex mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill text-warning me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
                          6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
                          0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
                          3.356.83 4.73c.078.443-.36.79-.746.592L8 
                          13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <div className="content pb-3">
                    <p className="text-muted">{t.text}</p>
                  </div>

                  <hr />

                  {/* Author Info */}
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      width="50"
                      height="50"
                      className="rounded-circle"
                    />
                    <div className="ps-3">
                      <div className="fw-bold">{t.name}</div>
                      <div className="text-muted small">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
