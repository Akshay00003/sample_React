import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star_rating.css";

const StarOne = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentId) {
    setRating(getCurrentId);
  }
  function handleMouseEnter(getCurrentId) {
    setHover(getCurrentId);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="start-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={50}
          ></FaStar>
        );
      })}
    </div>
  );
};

export default StarOne;
