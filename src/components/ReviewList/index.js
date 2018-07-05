import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../ReviewItem';

const ReviewList = (props) => {
  const { reviews, activeReviewIndex, selectReview } = props;
  return (
    <ul className="list">
      {reviews.map((review, index) => (
        <li key={index} onClick={() => selectReview(review, index)}>
          <ReviewItem review={review} active={index === activeReviewIndex} />
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  activeReviewIndex: PropTypes.number.isRequired,
  selectReview: PropTypes.func.isRequired,
};

export default ReviewList;
