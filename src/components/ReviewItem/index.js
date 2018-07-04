import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const ReviewItem = (props) => {
  const { active, review } = props;
  return (
    <div className={classNames('item', {
      active,
    })}
    >
      <span className="fullName">
        {review.fullName}
      </span>
      <span className="stars">
        <img
          src={`/stars-${review.starRating}.svg`}
          alt=""
        />
      </span>
      <div className="reviewTitle">
        {review.reviewTitle.length <= 40 ? review.reviewTitle : `${review.reviewTitle.slice(0, 37)}...`}
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  active: PropTypes.bool,
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
