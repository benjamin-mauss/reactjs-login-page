// @ts-check
import React, { Component } from 'react';
// @ts-ignore
import * as ReactDOM from 'react-dom';
// @ts-ignore
import Logado from './Logado' 
import USUARIOS from './index.js'
import './App.css';

class Register extends Component {
 
  render = () => {
    
    return (
        <div>
          <input type="text" name='nome' required placeholder='nome' /><br />
          <input type="text" name='username' required placeholder='username' /><br />
          <input type="password" name='password' required placeholder='password'/> <br />
          <input type="password" name='password2' required placeholder='password again'/> <br />
          <button  onClick={this.registrar}>Registrar</button>
        </div>
    );
  }

  
  
  registrar () {
    // check if the username is already taken
    
    // @ts-ignore
    if(document.getElementsByName('username')[0].value !="" && document.getElementsByName('password')[0].value !=""  && document.getElementsByName('password2')[0].value !=""  && document.getElementsByName('nome')[0].value !=""  && document.getElementsByName('password')[0].value == document.getElementsByName('password2')[0].value){
      let username = document.getElementsByName('username')[0].value
      let password = document.getElementsByName('password')[0].value
      let nome = document.getElementsByName('nome')[0].value
      
      USUARIOS.push({username: username, password: password, nome: nome})
      alert("deu certo")

    }else{
      alert('erro');
    }
    // password1 = document.getElementsByName('password')[0].value
    // password2 = document.getElementsByName('password2')[0].value
    // nome = document.getElementsByName('nome')[0].value
    
    // // check if the passwords are the same
    // if(password1 == password2){{
    //   // USUARIOS.push({nome: document.getElementsByName('nome')[0].value, username: document.getElementsByName('username')[0].value, password: document.getElementsByName('password')[0].value})
    //   alert("registrado!")
    // }


  }
  
}

export default Register;
