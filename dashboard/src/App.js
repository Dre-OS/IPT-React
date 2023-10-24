import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Login Form</h2>
      <div>
        <input type="text" id="username" />
        <br />
        <input type="password" id="password" />
        <br />
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default App;
