import NavbarElement from "./NavbarElement"
import { useUserContext } from '../context/UserProvider.jsx'
import { useProductContext } from '../context/ProductProvider.jsx'
import { useState, useEffect } from "react";



const Navbar = ({ user }) => {
  const userData = useUserContext();
  const myProductData = useProductContext();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }


  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();
    myProductDataData.dispatch({ type: "FILTER", value: event.target.value })
  }

  return (
    <nav className="navbar">
      <NavbarElement link="/" text={<>Welcome to my API Store <b>{userData.username}</b></>} classname="welcome" />
      {/* <div className="container px-4 px-lg-5 d-flex justify-content-between"> */}

      {/* <Link className="navbar-brand" to={"/"}>Welcome to my API Store <b>Henry</b></Link> */}
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="list">

        {userData.userLogin ? (
          <>
            <NavbarElement link="/" text={<>Filter <select name="categories" id="categories" onChange={handleFilter}>
              <option value="all">All Products </option>
              {categories && categories.map((category) => (
                <option key={category} value={category}>{category} </option>
              ))}
            </select></>} classname="navItem" />
            <NavbarElement link="/cart" text={<>Cart</>} classname="navItem" />
            <NavbarElement link="/login" text={<>Logout</>} classname="navItem" />
          </>
        ) : (
          <NavbarElement link="/login" text={<>Login</>} classname="navItem" />
        )}


      </ul>
      {/* </div> */}
      {/* </div> */}
    </nav>

  )
}

export default Navbar