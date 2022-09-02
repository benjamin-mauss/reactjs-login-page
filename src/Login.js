import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import Logado from './Logado' 
import './App.css';
import USUARIOS from './index';
class Login extends Component {
 
  render = () => {
    
    return (
      <div id="login_p">
        <form>
          <input type="text" name='username' required placeholder='username' /><br />
          <input type="password" name='password' required placeholder='password'/> <br />
          <button  onClick={this.login}>Logar</button>
        </form>
      </div>
    );
  }

  
  
  login (e) {
    e.preventDefault();
    // check if the username is already taken
    if(document.getElementsByName('username')[0].value !=="" && document.getElementsByName('password')[0].value !==""){
      
      let user = {
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
      }
      // check if user and password are correct
      let found = false;
      console.log(USUARIOS)
      for (let u of USUARIOS){
        console.log(u)
          if(u.username == user.username && u.password == user.password){
              found = true;
              alert('logado como ' + u.nome);
              ReactDOM.render((<Logado u={u.nome}/>), document.getElementById("main_content"));
          }
      }
      if (!found){
        alert('erro, not found user');
      }

    }else{
      alert('erro');
    }
    

  }
  
}

export default Login;
