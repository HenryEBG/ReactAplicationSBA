import { useState, useEffect } from "react"
import Card from "../components/Card.jsx"
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";
import Footer from "../components/Footer.jsx";
import { useProductContext } from '../context/ProductProvider.jsx'
import { useUserContext } from "../context/UserProvider";

function Store() {
  const myReduce = useProductContext();
  const myUserReduce = useUserContext();
  const fetchProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        myReduce.dispatch({type:"FETCH_PRODUCTS",value:data})
      });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Section  />
      <Footer/>
    </>



  )


}

export default Store