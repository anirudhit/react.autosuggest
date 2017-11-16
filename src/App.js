import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header.js';

class App extends Component {
  render() {
    return (
      <div className="clearfix">
        <Header />
      </div>
    );
  }
}

export default App;
