import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Store from './pages/Store.jsx'
import Login from './pages/Login.jsx'
import Cart from "./pages/Cart.jsx"
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)
  const user=false
  return (
    <BrowserRouter>
      <div>
        {/* Tha Navbar is fixed and will appear in all pages */}
        <Navbar user={user} />
        {/* Adding routes to all the pages of the document */}
        <Routes>
          {/* Route to the principal page if the user is logout if not it redirect to the login page */}
          <Route path="/" element={user ? <Store /> : <Navigate to ="/login" />  } />
          {/* Route to the login page if the user is login redirect to the principal page */}
          <Route path="/login" element={user ? <Navigate to ="/" /> :  <Login />} />
          {/* Route to the cart page, if the use is not log ir redirect to the login page */}
          <Route path="/cart" element={user ? <Cart /> : <Navigate to ="/login" />} />
          </Routes >
      </div>
    </BrowserRouter>
  )
}

export default App
