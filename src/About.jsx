import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";
import Footer from "./Footer";
import about1 from "./assets/about1.jpg";
import about2 from "./assets/about2.jpg";

function About() {
  return (
    <div className="about-wrapper m-0 p-0">
      <CustomNavbar />
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #F2B6A0, #f08a6c)",
        }}
      >
        <Container>
          <h1 className="fw-bold">About Mimi's Restaurant</h1>
          <p className="lead mt-2">
            Where passion, taste, and experience come together.
          </p>
        </Container>
      </section>
      <section
        className=" py-5 bg-light mb-0 "
        style={{ backgroundColor: "#F2B6A0" }}
      >
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <h2 className="mb-3">Our Story</h2>

              <p>
                Welcome to Mimi's Restaurant, where passion meets flavor. We are
                dedicated to providing a unique dining experience with fresh
                ingredients and warm hospitality.
              </p>

              <p>
                Every dish is carefully crafted by our chefs using fresh,
                locally sourced ingredients to bring you unforgettable taste.
              </p>

              <Button className="mt-3">
                <a href="/menu"> View Menu</a>
              </Button>
            </Col>

            <Col md={6}>
              <img
                src={about1}
                alt="Delicious food"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className=" py-4 bg-white mb-0"
        style={{ backgroundColor: "#F2B6A0" }}
      >
        <Container>
          <Row className="g-3">
            <Col md={6}>
              <img
                src={about2}
                alt="Restaurant food"
                className="img-fluid rounded shadow-sm"
              />
            </Col>

            <Col md={6}>
              <div className="h-100 d-flex flex-column justify-content-center p-3">
                <h3>Why Choose Us?</h3>
                <p>
                  Cozy atmosphere, top-quality meals, and excellent customer
                  service designed to make every visit special.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default About;
