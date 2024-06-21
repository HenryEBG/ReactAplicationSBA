import { useState, useEffect } from "react"
import Card from "../components/Card.jsx"
import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";
import Footer from "../components/Footer.jsx";
import { useProductContext } from '../context/ProductProvider.jsx'

function Store() {
  // using a reduce-context combination
  const myReduce = useProductContext();
// get all the products and add with a dispatch
  const fetchProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        myReduce.dispatch({type:"FETCH_PRODUCTS",value:data})
      });
  }
  //using useEffect to make possible to make a fetch
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