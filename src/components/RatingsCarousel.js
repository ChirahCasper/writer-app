import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/RatingsCarousel.css";

const RatingsCarousel = () => {
  const ratings = [
    {
      name: "Sophia M.",
      review: "Absolutely amazing service! My assignments have never been this well-done. 👏🔥",
      rating: 5,
    },
    {
      name: "Daniel K.",
      review: "Super fast delivery and top-notch quality. I’m beyond impressed. 😍✨",
      rating: 4.8,
    },
    {
      name: "Ava J.",
      review: "Legit the best writing service! No cap. 💯💖",
      rating: 5,
    },
    {
      name: "Liam B.",
      review: "Saved my grade fr. 10/10 would recommend. 🚀📚",
      rating: 4.9,
    },
  ];

  return (
    <div className="ratings-carousel card shadow-lg p-4">
      <h4 className="fw-bold text-center">⭐ CUSTOMER RATINGS</h4>
      <Carousel controls={false} indicators={false} interval={3000}>
        {ratings.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="rating-item text-center">
              <p className="review-text">"{item.review}"</p>
              <h5 className="reviewer-name">— {item.name}</h5>
              <div className="stars">
                {"★".repeat(Math.floor(item.rating))}{"☆".repeat(5 - Math.floor(item.rating))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default RatingsCarousel;
