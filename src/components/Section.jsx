import { useEffect,useState } from "react";
import Card from "./Card.jsx";

function Section(){

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }


  useEffect(() => {
    fetchProducts();
  }, []);
  
  
  return (



        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div id="productContainer" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
                   {products && products.map((product) => (
                    <Card key={product.id} data={product}/>
                   ))}                   
                </div>
            </div>
        </section>    
  )
}

export default Section