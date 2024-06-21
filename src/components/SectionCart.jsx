import { useEffect,useState } from "react";
import Card from "./Card.jsx";
import { useUserContext } from '../context/UserProvider.jsx'


function SectionCart(){
  // I use the product context hook
  const myCart = useUserContext();
  console.log(myCart)
  return (
        //I map the array to show the products in different cards.
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div id="productContainer" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
                   {myCart.cart.length>0 && myCart.cart.map((product) => (
                    <Card key={product.id} data={product} />
                   ))}                   
                </div>
            </div>
        </section>    
  )
}

export default SectionCart