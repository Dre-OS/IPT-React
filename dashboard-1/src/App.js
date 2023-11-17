import Register from './pages/register.js';
import Login from './pages/login.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Login/>} />z
      </Routes>
    </BrowserRouter>
  );
}

export default App;
