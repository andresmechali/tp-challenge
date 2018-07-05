import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import reviewActions from '../../redux/actions/reviewActions';
import ReviewList from '../ReviewList';

import processReviews from '../../utils/processReviews';

class ReviewMenu extends Component {
  constructor(props) {
    super(props);
    this.averageRating = processReviews.getAverageReview(props.reviews);
  }

  render() {
    const {
      reviews,
      productName,
      activeReviewIndex,
      selectReview,
    } = this.props;

    return (
      <div className="left-panel">
        <div className="product-information">
          <div className="product-name">
            {productName}
          </div>
          <div className="review-summary">
            <img
              className="average-review"
              src={`/stars-${this.averageRating}.svg`}
              alt=""
            />
            <div className="review-count">
              {`${reviews.length} reviews`}
            </div>
          </div>
        </div>
        <ReviewList
          reviews={reviews}
          activeReviewIndex={activeReviewIndex}
          selectReview={selectReview}
        />
      </div>
    );
  }
}

ReviewMenu.propTypes = {
  reviews: PropTypes.array.isRequired,
  productName: PropTypes.string.isRequired,
  activeReviewIndex: PropTypes.number.isRequired,
  selectReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeReviewIndex: state.review.activeReviewIndex,
});

const mapDispatchToProps = (dispatch) => ({
  selectReview: (review, index) => dispatch(reviewActions.selectReview(review, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewMenu);
