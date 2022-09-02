import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './Logado'
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';

class Footer extends Component {
 
  render = () => {
    
    return (
      <div id="foot">
      <button class="login_page" onClick={this.changeLocation}>Login Page</button>
      <button class="register_page" onClick={this.changeLocation}>Register Page</button>
      </div>
    );
  }
    changeLocation = (e) => {
        e.target.textContent === 'Login Page' ? this.loadLogin() : this.loadRegister();
    }
    loadLogin = () =>{
    
        ReactDOM.render((<Login />), document.getElementById("main_content"));
    }
    loadRegister = () =>{
        ReactDOM.render((<Register />), document.getElementById("main_content"));
    }
}

export default Footer;
