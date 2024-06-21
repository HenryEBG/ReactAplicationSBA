import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRef,useState,useEffect } from "react"
import { useUserContext } from "../context/UserProvider";
import {useNavigate} from "react-router-dom"

 function Login() {
  //creating hooks for the inputs
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const myReduce = useUserContext();
  const navigate = useNavigate();
//creating a hook for manage users
  const [users, setUsers] = useState([]);
  //creating a hook for get the users from the API
  //async function to get the info from the API
  const fetchUsers = async () => {
    await fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }

//hook to manipulate the function with the users from the API
  useEffect(() => {
    fetchUsers();
  }, []);

  const  handleSubmit = (event)=>{
    event.preventDefault();

    const founded=users.find((user) => (user.username== usernameInputRef.current.value) && (user.password==passwordInputRef.current.value))
    if(founded==undefined){
      //imprimir mensaje de que no se encuentra y hacer focus en el username
      usernameInputRef.current.focus();
    }else {
        console.log(myReduce.userLogin)
        myReduce.dispatch({type:'LOGIN', value:usernameInputRef.current.value})
        console.log(myReduce.userLogin)
        navigate("/");
      //se encontro y deberiamos guardar los datos en una variable estado y recargar la pagina
    }
    }
  

  return (
    <>
      {/* <Header/> */}
      <form onSubmit={handleSubmit}>
      <div className="login">
      
      <div className="insideContainer">
        <div className="leftContainer">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes" className="loginImage" />
        </div>
        
        <div className="rightContainer">
        <div className="titleLogin">Login to Our Store</div>
        
          <input className="inputLogin" ref={usernameInputRef} type="text" placeholder="username"/>
          <input className="inputLogin" ref={passwordInputRef} type="password" placeholder="passowrd"/>
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