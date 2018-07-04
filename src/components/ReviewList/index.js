import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../ReviewItem';
import './styles.css';

const ReviewList = (props) => {
  const { reviews, activeReviewIndex, selectReview } = props;
  return (
    <ul className="list">
      {reviews.map((review, index) => (
        <li
          onClick={() => selectReview(index)}
        >
          <ReviewItem
            key={index}
            review={review}
            active={index === activeReviewIndex}
          />
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  activeReviewIndex: PropTypes.number,
  selectReview: PropTypes.func.isRequired,
};

export default ReviewList;
