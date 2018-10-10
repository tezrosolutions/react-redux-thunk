import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';

import Main from "./Main.js";

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="header-container">
          <div className="container-fluid">
          </div>
        </header>
        <div className="content-container">
          <div className="container-fluid">
            <Main />
          </div>
        </div>
        <footer className="footer-container">
          <div className="container-fluid">
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
