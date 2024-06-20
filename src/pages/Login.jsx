import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRef,useState,useEffect } from "react"

 function Login() {
  //creating hooks for the inputs
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
//creating a hook for manage users
  const [users, setUsers] = useState([]);
  //creating a hook for get the users from the API
  const fetchUsers = async () => {
    await fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }


  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <>
      {/* <Header/> */}
      <form >
      <div className="login">
      
      <div className="insideContainer">
        <div className="leftContainer">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes" className="loginImage" />
        </div>
        
        <div className="rightContainer">
        <div className="titleLogin">Login to Our Store</div>
        
          <input className="inputLogin" type="text" placeholder="username"/>
          <input className="inputLogin" type="password" placeholder="passowrd"/>
          <button type="submit"  className="submitLogin">Login</button>
          
        
        </div>
        
      </div>   
      </div>
      </form>
      {/* <Footer/> */}
    </>

  )
}

export default Login