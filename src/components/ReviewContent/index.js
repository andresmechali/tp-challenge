import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

class ReviewContent extends Component {
  render() {
    const {
      activeReview,
    } = this.props;
    return (
      <div className="content">
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
        {
          activeReview.location
          && (
            <div className="reviewLocation">
              <img
                src="/location-icon.png"
                alt=""
              />
              {activeReview.location}
            </div>
          )
        }
        <div className="reviewContent">
          <div className="title">
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

const mapStateToProps = state => ({
  activeReview: state.review.activeReview,
});

export default connect(mapStateToProps)(ReviewContent);
