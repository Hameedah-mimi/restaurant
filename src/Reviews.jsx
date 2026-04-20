import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";
import user4 from "./assets/user4.jpg";
import user5 from "./assets/user5.jpg";
import user6 from "./assets/user6.jpg";

function Reviews() {
  const reviews = [
    { name: "Aisha Bello", text: "The food was amazing!", img: user1 },
    { name: "John Ade", text: "Great experience overall.", img: user2 },
    { name: "Fatima Yusuf", text: "Loved the service!", img: user3 },
    { name: "David Ogun", text: "Very fresh meals always.", img: user4 },
    { name: "Zainab Musa", text: "Highly recommend!", img: user5 },
    { name: "Michael James", text: "Always on time delivery.", img: user6 },
  ];

  return (
    <div className="autoShow">
      <Container className="reviews-section text-center">
        <h2 className="mb-5">What Our Customers Say</h2>

        <div className="swiper-wrapper-custom">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Card className="review-card">
                  <Card.Body>
                    <Image
                      src={review.img}
                      roundedCircle
                      className="review-img mb-3"
                    />
                    <Card.Text>"{review.text}"</Card.Text>
                    <h5 className="mt-3">{review.name}</h5>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Reviews;
