import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import food1 from "./assets/table1.jpg";
import food2 from "./assets/cooking1.jpg";

function Body() {
  return (
    <div className="body-wrapper">
      <section className="hero">
        <div className="hero-text">
          <h1>
            A Variety of <br /> Meals to choose from
          </h1>
          <p>
            Order delicious meals from our kitchen, made with love, fresh
            ingredients, and expert chefs.
          </p>

          <button className="hero-btn">
            {" "}
            <a href="/reservation">Reserve a table →</a>
          </button>
        </div>

        <div className="hero-image">
          <img src={food1} alt="food" />
        </div>
      </section>
      <Container className="custom">
        <Row className="align-items-center">
          <Col md={6} className="col-image order-2 order-md-1 mt-4 mt-md-0">
            <img src={food2} alt="food" className="custom-img" />
          </Col>

          <Col md={6} className="order-1 order-md-2">
            <h1 className="title">Why Choose Mimi’s Restaurant</h1>

            <p className="subtitle">
              We provide top-quality meals and a seamless dining experience both
              online and in-house.
            </p>

            <div className="features">
              <div className="feature-box">
                <h5>Quality Meals</h5>
                <p>Prepared by professional chefs with fresh ingredients.</p>
              </div>

              <div className="feature-box">
                <h5>Fast Delivery</h5>
                <p>Get your food delivered hot and fresh in minutes.</p>
              </div>

              <div className="feature-box">
                <h5>Easy Ordering</h5>
                <p>Simple and smooth ordering experience.</p>
              </div>
            </div>

            <button className="hero-btn">
              <a href="/menu">Order Now →</a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
