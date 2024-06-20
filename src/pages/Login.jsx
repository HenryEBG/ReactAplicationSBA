import Footer from "../components/Footer"
import Header from "../components/Header"

 function Login() {
  return (
    <>
      {/* <Header/> */}
      <form action="">
      <div className="login">
      
      <div className="insideContainer">
        <div className="leftContainer">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes" className="loginImage" />
        </div>
        
        <div className="rightContainer">
        <div className="titleLogin">Login to Our Store</div>
        
          <input className="inputLogin" type="text" placeholder="username"/>
          <input className="inputLogin" type="text" placeholder="passowrd"/>
          <button type="submit" className="submitLogin">Login</button>
          
        
        </div>
        
      </div>   
      </div>
      </form>
      {/* <Footer/> */}
    </>

  )
}

export default Login