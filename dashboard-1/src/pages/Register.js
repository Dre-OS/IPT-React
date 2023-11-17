import React from 'react';
import logo from './assets/Logo mono.png';
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <div className='root'>
        <img src={logo} alt="logo" class="App-logo"/>
        <h2>Register:</h2>
        <div id="textInput">
          <span className="h3">First Name: &nbsp;</span><br />
          <input type="text" id="firstname" /><br />
          <span className="h3">Last Name: &nbsp;</span><br />
          <input type="text" id="lastname" /><br />
          <span className="h3">Username: &nbsp;</span><br />
          <input type="text" id="username" /><br />
          <br /><br />
          <span className="h3">Password: &nbsp;</span><br />
          <input type="password" id="password" /><br />
          <span className="h3">Confirm Password: &nbsp;</span><br />
          <input type="password" id="confirmpass" /><br />
          <br /><br />
          <button type="submit" onClick={()=> navigate('/login')} id='register'>Register</button>
          </div>
    </div>
  )
}

export default Register
