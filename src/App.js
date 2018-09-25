import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import DealsGrid from './components/DealsGrid/DealsGrid';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <DealsGrid />
        </div>
      </div>
    );
  }
}

export default App;
