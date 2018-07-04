import React, { Component } from 'react';
import './styles.css';
import ReviewMenu from '../../components/ReviewMenu';
import data from '../../reviews.json';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { reviews } = data;
    return (
      <div className="main">
        <ReviewMenu
          reviews={reviews}
        />
      </div>
    );
  }
}

export default Main;
