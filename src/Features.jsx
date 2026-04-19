import React from "react";
import { Card } from "react-bootstrap";
import order from "./assets/ordernow.jpg";
import delivery from "./assets/fast delivery.jpg"; // fixed name
import chef from "./assets/becomechef.jpg";

function Features() {
  const features = [
    {
      title: "Order Food",
      text: "Discover delicious meals and order your favorite dishes easily.",
      link: (
        <a href="/menu" className="btn-feat">
          Get Started →
        </a>
      ),
      img: order,
    },
    {
      title: "Become a Chef",
      text: "Share your cooking skills and earn by selling your meals.",
      link: (
        <a href="/contact" className="btn-feat">
          Get Started →
        </a>
      ),
      img: chef,
    },
    {
      title: "Fast Delivery",
      text: "Get your food delivered quickly and fresh to your doorstep.",
      link: (
        <a href="/menu" className="btn-feat">
          Get Started →
        </a>
      ),
      img: delivery,
    },
  ];

  return (
    <div className="autoShow">
      <div className="feature-row">
        {features.map((item, index) => (
          <div className="feature-col" key={index}>
            <Card className="feature-card h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "170px", marginBottom: "15px" }}
                />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <p style={{ color: "green", fontWeight: "bold" }}>
                  {item.link}
                </p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
