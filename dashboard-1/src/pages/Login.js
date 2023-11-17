import React from 'react';
import logo from './assets/Logo mono.png'
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {

  const navigate = useNavigate();

  return (
    <div className='root'>
        <img src={logo} alt="logo" class="App-logo"/>
        <h2>Login</h2>
        <div id="textInput">
          <span className="h3">Username: &nbsp;</span><br />
          <input type="text" id="username" />
          <br /><br />
          <span className="h3">Password: &nbsp;</span><br />
          <input type="password" id="password" />
          <br /><br />
          <button type="submit">Login</button>
          <button type="submit" onClick={()=> navigate('/register')}>Register</button>
          </div>
    </div>
  )
}

export default Login;