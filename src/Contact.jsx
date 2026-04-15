import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";

function Contact() {
  return (
    <div className="contact-wrapper">
      <CustomNavbar />
      <section className="py-5" style={{ backgroundColor: " #F2B6A0 " }}>
        <Container>
          {/* Heading */}
          <Row className="text-center mb-4">
            <Col>
              <h2>Contact Us</h2>
              <p>
                We would love to hear from you. Reach out for reservations or
                inquiries.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={5} className="mb-4">
              <h4>Mimi's Kitchen</h4>
              <p>
                <strong> Address:</strong> Lagos, Nigeria
              </p>
              <p>
                <strong> Phone:</strong> +234 9024 725 100
              </p>
              <p>
                <strong> Email:</strong> mimiskitchen@email.com
              </p>
              <p>
                <strong> Hours:</strong> Mon - Sun: 9:00 AM - 10:00 PM
              </p>
            </Col>

            <Col md={7}>
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

                <Button style={{ backgroundColor: "#6b3e26", border: "none" }}>
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
