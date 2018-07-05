import React, { Component } from 'react';

import data from './reviews.json';

import Main from './containers/Main';
import './App.css';

class App extends Component {
  render() {
    const { reviews } = data;
    return (
      <div className="App">
        <Main reviews={reviews} productName="Fake product" />
      </div>
    );
  }
}

export default App;
