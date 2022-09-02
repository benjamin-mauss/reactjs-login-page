import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './Logado'
import logo from './logo.svg';
import './App.css';

class Logado extends Component {
 
  render = () => {
    return (
      <div id="logged">
        <h1>estás logado como {this.props.u}</h1>
      </div>
    );
  }

    
  
}

export default Logado;
