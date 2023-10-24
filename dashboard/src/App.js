import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
