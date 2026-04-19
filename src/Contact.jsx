import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import CustomNavbar from "./Nav";
import Footer from "./Footer";
import contact from "./assets/contact.jpg";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "MIMI_24434",
        "template_c040kbf",
        form.current,
        "qd_w19Y8uRysXvHye",
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setLoading(false);
        },
      );
  };

  return (
    <div className="contact-wrapper">
      <CustomNavbar />

      {/* HERO SECTION */}
      <section
        className="contact-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* OVERLAY */}
        <div className="overlay"></div>

        <Container className="position-relative">
          {/* HEADER */}
          <Row className="text-center mb-5 text-white">
            <Col>
              <h1 className="fw-bold display-4">Get in Touch</h1>
              <p className="lead">
                We’d love to hear from you. Reservations, feedback, or just say
                hello.
              </p>
            </Col>
          </Row>

          <Row className="g-4 align-items-stretch">
            {/* CONTACT INFO */}
            <Col md={5}>
              <div className="contact-info p-4 h-100 text-white">
                <h4 className="mb-4">Mimi’s Kitchen</h4>

                <p>
                  <strong>Address:</strong> Lagos, Nigeria
                </p>
                <p>
                  <strong>Phone:</strong> +234 9024725100
                </p>
                <p>
                  <strong>Email:</strong> mimiskitchen@email.com
                </p>
                <p>
                  <strong>Hours:</strong> Mon - Sun: 9:00 AM - 10:00 PM
                </p>
              </div>
            </Col>

            {/* FORM */}
            <Col md={7}>
              <div className="contact-form p-4 shadow-lg">
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Write your message..."
                      required
                    />
                  </Form.Group>

                  <Button className="w-100 contact-btn" type="submit">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>

                  {success && (
                    <p className="text-success mt-3 text-center">
                      Message sent successfully ✅
                    </p>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
