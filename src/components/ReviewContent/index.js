import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ReviewContent extends Component {
  render() {
    const { activeReview } = this.props;
    return (
      <div className="right-panel">
        <div className="nameRow">
          <div className="reviewName">
            {activeReview.fullName}
          </div>
          <img
            className="reviewStars"
            src={`/stars-${activeReview.starRating}.svg`}
            alt=""
          />
        </div>
        {activeReview.location && (
          <div className="reviewLocation">
            <img src="/location-icon.png" alt="" />
            {activeReview.location}
          </div>
        )}
        <hr className="horizontal-line" />
        <div className="reviewContent">
          <div
            className={classNames('title', {
              'title-5-stars': activeReview.starRating === '5',
              'title-4-stars': activeReview.starRating === '4',
              'title-3-stars': activeReview.starRating === '3',
              'title-2-stars': activeReview.starRating === '2',
              'title-1-stars': activeReview.starRating === '1',
            })}
          >
            "
            {activeReview.reviewTitle}
            "
          </div>
          <div className="reviewBody">
            {activeReview.reviewBody}
          </div>
        </div>
      </div>
    );
  }
}

ReviewContent.propTypes = {
  activeReview: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  activeReview: state.review.activeReview,
});

export default connect(mapStateToProps)(ReviewContent);
