import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";
import Footer from "./Footer";
import reserve from "./assets/reservation2.jpg";

function Reservation() {
  return (
    <div className="reservation-wrapper">
      <CustomNavbar />

      <section className="reservation-section">
        <Container>
          <Row className="align-items-center">
            {/* IMAGE SIDE */}
            <Col md={6} className="mb-4 mb-md-0">
              <div className="reservation-image">
                <img src={reserve} alt="reservation" />
              </div>
            </Col>

            {/* TEXT SIDE */}
            <Col md={6}>
              <h1 className="fw-bold mb-3">Make a Reservation</h1>
              <p className="text-muted mb-4">
                Reserve your table and enjoy a memorable dining experience at
                Mimi's Restaurant.
              </p>

              <div className="reservation-card p-4 shadow">
                <h5 className="mb-3">Reservation Details</h5>

                <ul className="list-unstyled mb-4">
                  <li>✔ Full Name</li>
                  <li>✔ Preferred Date</li>
                  <li>✔ Time of Reservation</li>
                  <li>✔ Number of Guests</li>
                  <li>✔ Contact Information</li>
                </ul>

                <div className="d-flex gap-3 flex-wrap">
                  <Button href="tel:+2349024725100" className="reservation-btn">
                    Call Us
                  </Button>

                  <Button
                    href="mailto:mimirestaurant@email.com"
                    className="reservation-btn outline"
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
