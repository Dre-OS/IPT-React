import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bg from './assets/bg.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h2>Login Form</h2>
        <div id="login">
          Username: &nbsp;<br />
          <input type="text" id="username" />
          <br /><br />
          Password: &nbsp;<br />
          <input type="password" id="password" />
          <br /><br />
          <button type="submit">Login</button>
        </div>
    </div>
    </>
  )
}

export default App
