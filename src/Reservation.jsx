import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";
import Footer from "./Footer";

function Reservation() {
  return (
    <div className="reservation-wrapper">
      <CustomNavbar />

      {/* FULL PAGE SECTION */}
      <section className="reservation-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              {/* HEADER */}
              <h1 className="fw-bold mb-3">Make a Reservation</h1>
              <p className="text-muted mb-4">
                Reserve your table and enjoy a memorable dining experience at
                Mimi's Restaurant.
              </p>

              {/* CARD */}
              <div className="reservation-card p-4 shadow-sm mx-auto">
                <p className="mb-3">
                  To ensure we serve you better, we recommend booking in
                  advance, especially during peak hours and special occasions.
                </p>

                <h5 className="mb-3">Reservation Details</h5>

                <ul className="list-unstyled text-start mb-4">
                  <li>✔ Full Name</li>
                  <li>✔ Preferred Date</li>
                  <li>✔ Time of Reservation</li>
                  <li>✔ Number of Guests</li>
                  <li>✔ Contact Information</li>
                </ul>

                <p className="mb-4">
                  Our team will confirm your reservation as soon as possible.
                </p>

                {/* BUTTONS */}
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button href="tel:+2349024725100" className="reservation-btn">
                    Call Us
                  </Button>

                  <Button
                    href="mailto:mimirestaurant@email.com"
                    className="reservation-btn"
                  >
                    Email Us
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Reservation;
