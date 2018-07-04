import React, { Component } from 'react';
import './styles.css';
import ReviewMenu from '../../components/ReviewMenu';
import ReviewContent from '../../components/ReviewContent';
import data from '../../reviews.json';

class Main extends Component {
  render() {
    const { reviews } = data;
    return (
      <div className="main">
        <ReviewMenu
          reviews={reviews}
        />
        <ReviewContent />
      </div>
    );
  }
}

export default Main;
