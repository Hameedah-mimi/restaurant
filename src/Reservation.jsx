import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./Nav";

function Reservation() {
  return (
    <div className="reservation-wrapper">
      <CustomNavbar />

      <section className="py-5" style={{ backgroundColor: "#F2B6A0" }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="mb-4">Make a Reservation</h2>

              <p>
                At Mimi's Restaurant, we are committed to giving you the best
                dining experience. To ensure we serve you better, we encourage
                guests to make reservations in advance, especially during busy
                hours and special occasions.
              </p>

              <p>
                To reserve a table, please contact us via telephone or email
                with the following details:
              </p>

              <ul style={{ listStyle: "none", padding: 0 }}>
                <li> Your Full Name</li>
                <li> Preferred Date</li>
                <li> Time of Reservation</li>
                <li> Number of Guests</li>
                <li> Contact Information</li>
              </ul>

              <p className="mt-3">
                Our team will confirm your reservation as soon as possible. We
                look forward to hosting you at Mimi's Restaurant.
              </p>

              <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  href="tel:+23490 2472 5100"
                  style={{ backgroundColor: "#6b3e26", border: "none" }}
                >
                  Call Us
                </Button>

                <Button
                  href="mailto:mimirestaurant@email.com"
                  style={{ backgroundColor: "#6b3e26", border: "none" }}
                >
                  Email Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Reservation;
