import React from 'react';
import logo from './assets/Logo mono.png';

import "./Register.css";
function Register() {
  return (
    <div>
      <img src={logo} alt="logo" className='App-Logo' />
        <h1>Register</h1>
        <p>Full name:</p>
        <p>Password:</p>
        <p>Username:</p>
    </div>
  )
}

export default Register