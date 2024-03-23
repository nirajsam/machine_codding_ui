import React from 'react'
import { MdStar } from 'react-icons/md';

import './Rating.css'
const StarRating = () => {
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star"><MdStar className='mdStar'/></span>
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating