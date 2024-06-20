import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Store from './pages/Store.jsx'
import Login from './pages/Login.jsx'
import Cart from "./pages/Cart.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          </Routes >
      </div>
    </BrowserRouter>
  )
}

export default App
