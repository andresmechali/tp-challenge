import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewMenu from '../../components/ReviewMenu';
import ReviewContent from '../../components/ReviewContent';

class Main extends Component {
  render() {
    const { reviews, productName } = this.props;
    return (
      <div className="main">
        <ReviewMenu reviews={reviews} productName={productName} />
        <ReviewContent />
      </div>
    );
  }
}

Main.propTypes = {
  reviews: PropTypes.object.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Main;
