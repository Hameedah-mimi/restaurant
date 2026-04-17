import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-wrapper">
      <CustomNavbar />

      {/* FULL PAGE SECTION */}
      <section className="contact-section d-flex align-items-center">
        <Container>
          {/* HEADER */}
          <Row className="text-center mb-5">
            <Col>
              <h1 className="fw-bold">Contact Us</h1>
              <p className="text-muted">
                We'd love to hear from you. Reach out for reservations or
                inquiries.
              </p>
            </Col>
          </Row>

          <Row className="g-4 align-items-stretch">
            {/* CONTACT INFO */}
            <Col md={5}>
              <div className="contact-info p-4 h-100">
                <h4 className="mb-3">Mimi's Kitchen</h4>

                <p>
                  <strong> Address:</strong> Lagos, Nigeria
                </p>
                <p>
                  <strong> Phone:</strong> +234 9024725100
                </p>
                <p>
                  <strong> Email:</strong> mimiskitchen@email.com
                </p>
                <p>
                  <strong> Hours:</strong> Mon - Sun: 9:00 AM - 10:00 PM
                </p>
              </div>
            </Col>

            {/* FORM */}
            <Col md={7}>
              <div className="contact-form p-4 shadow-sm">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                    />
                  </Form.Group>

                  <Button className="w-100 contact-btn">Send Message</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;
