function Card({data}) {
  return (
    <div className="card h-100 ">
      {/* <!-- Sale badge--> */}
      {/* <div className="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> */}
      {/* <!-- Product image--> */}
      <img className="card-img-top h-25 p-2 m-2" src={data.image} alt="..."></img> 
            {/* <!-- Product details--> */}
      <div className="card-body p-4">
        <div className="text-center">
          {/* <!-- Product name--> */}
          <h5 className="fw-bolder">{data.title}</h5>
          {/* <!-- Product Quantity--> */}
          ${data.price}
        </div>
      </div>
      {/* <!-- Product actions--> */}
    <form action="http://localhost:3000/carts/add" method="PATCH" id={data.id}> 
    <input type="hidden" name="id" value={data.id} />
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center ">
        <div className="text-center">
        <input className="btn btn-outline-dark mt-auto ml-2" type="submit" id="${product.id}"value="Add to Cart"></input>
        
        </div>
    </div>
    </form>
      {/* <!-- Product actions--> */}
      {/* <form action="http://localhost:3000/carts/delete" method="PATCH" id="form${product.product.id}">
        <input type="hidden" name="id" value={data.id} />
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center ">
          <div className="text-center">
            <input className="btn btn-outline-dark mt-auto ml-2" type="submit" id={data.id} value="Remove from Cart" />

          </div>
        </div>
      </form> */}
    </div>
  )
}
  export default Card