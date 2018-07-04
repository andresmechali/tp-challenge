import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../../components/ReviewList';

import './styles.css';

class ReviewMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeReviewIndex: 1,
      activeFilters: [],
    };
    this.selectReview = this.selectReview.bind(this);
  }

  selectReview(index) {
    this.setState({
      activeReviewIndex: index,
    });
  }

  render() {
    const { activeReviewIndex } = this.state;
    const { reviews } = this.props;
    return (
      <div className="menu">
        <ReviewList
          reviews={reviews}
          activeReviewIndex={activeReviewIndex}
          selectReview={this.selectReview}
        />
      </div>
    );
  }
}

ReviewMenu.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewMenu;
