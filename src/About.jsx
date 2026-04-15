import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";

function About() {
  return (
    <div className="about-wrapper">
      <CustomNavbar />
      <section className="py-5" style={{ backgroundColor: "#F2B6A0" }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="mb-4">About Mimi's Restaurant</h2>

              <p>
                Welcome to Mimi's Restaurant, where passion meets flavor. We are
                dedicated to providing a unique dining experience that combines
                quality ingredients, exceptional service, and a warm, inviting
                atmosphere. Our restaurant was founded with a simple goal which
                is to bring people together over delicious meals that create
                lasting memories.
              </p>

              <p>
                Every dish at Mimi's Restaurant is carefully prepared using
                fresh, locally sourced ingredients to ensure the highest quality
                and taste. Our chefs blend traditional recipes with modern
                techniques to create meals that are both comforting and
                exciting. Whether you're craving a quick bite or planning a
                special occasion, we strive to make every visit truly special.
              </p>

              <p>
                Beyond great food, we believe in creating a welcoming space
                where everyone feels at home. From friendly staff to a cozy
                ambiance, every detail is designed with our guests in mind. We
                are committed to delivering not just meals, but experiences that
                you will always remember.
              </p>

              <p>
                Thank you for choosing Mimi's Restaurant. We look forward to
                serving you and being part of your special moments.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
