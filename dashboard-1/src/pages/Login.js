import React from 'react';
import logo from './assets/Logo mono.png'
import "./Login.css";
function Login() {
  return (
    <div>
        <div class="bg"></div>
        <img src={logo} alt="logo" class="App-logo"/>
        <h2>Login</h2>
        <div id="login">
          <span className="h3">Username: &nbsp;</span><br />
          <input type="text" id="username" />
          <br /><br />
          <span className="h3">Password: &nbsp;</span><br />
          <input type="password" id="password" />
          <br /><br />
          <button type="submit">Login</button>
          <button type="submit">Sign Up</button>
          </div>
    </div>
  )
}

export default Login;