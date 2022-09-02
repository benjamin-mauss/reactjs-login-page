import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Login page</h2>
        </div>
        <br />
        <div id="main_content">
          <Login />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
