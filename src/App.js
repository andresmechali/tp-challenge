import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './containers/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
