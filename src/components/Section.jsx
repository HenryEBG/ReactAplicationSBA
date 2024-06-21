import { useEffect,useState } from "react";
import Card from "./Card.jsx";
import { useProductContext } from '../context/ProductProvider.jsx'

function Section(){

  // I use the product context hook
  const myReduce = useProductContext();
  return (
        //I map the array to show the products in different cards.
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div id="productContainer" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
                   {myReduce.products.length>0 && myReduce.products.map((product) => (
                    <Card key={product.id} data={product} />
                   ))}                   
                </div>
            </div>
        </section>    
  )
}

export default Section