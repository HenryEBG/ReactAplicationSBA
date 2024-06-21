import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Store from './pages/Store.jsx'
import Login from './pages/Login.jsx'
import Cart from "./pages/Cart.jsx"
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom"
import { useUserContext } from './context/UserProvider.jsx'
import { ProductProvider } from './context/ProductProvider.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const UserData = useUserContext();
 
  return (
    <ProductProvider>
    <BrowserRouter>
      <div>
        {/* Tha Navbar is fixed and will appear in all pages */}
        <Navbar  />
        {/* Adding routes to all the pages of the document */}
        <Routes>
          {/* Route to the principal page if the user is logout if not it redirect to the login page */}
          <Route path="/" element={UserData.userLogin ? <Store /> : <Navigate to ="/login" />  } />
          {/* Route to the login page if the user is login redirect to the principal page */}
          <Route path="/login" element={UserData.userLogin ? <Navigate to ="/" /> :  <Login />} />
          {/* Route to the cart page, if the use is not log ir redirect to the login page */}
          <Route path="/cart" element={UserData.userLogin ? <Cart /> : <Navigate to ="/login" />} />
          </Routes >
      </div>
    </BrowserRouter>
    </ProductProvider>
    
  )
}

export default App
