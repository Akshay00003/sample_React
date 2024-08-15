import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star_rating.css";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentId) {
    setRating(getCurrentId);
    console.log("click :"+getCurrentId);
  }
  function handleMouseEnter(getCurrentId) {
    setHover(getCurrentId);
    console.log("hover: "+getCurrentId);
  }
  function handleMouseLeave() {
    setHover(rating);
    console.log("leave: "+rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={60}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
