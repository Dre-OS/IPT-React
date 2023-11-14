import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bg from './assets/bg.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import logo from './assets/Logo mono.png'
import viteLogo from '/vite.svg'
import './App.css'
import register from './pages/register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
