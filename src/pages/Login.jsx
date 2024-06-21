import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRef,useState,useEffect } from "react"
import { useUserContext } from "../context/UserProvider";


 function Login() {
  //creating hooks for the inputs
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  //using the useUserContext hook a combination of reduce and context
  const myReduce = useUserContext();

//creating a hook for manage users 
// It is not need to add this info the context because no other part interact with this arrray
  const [users, setUsers] = useState([]);
  //creating a hook for get the users from the API
  //async function to get the info from the API
  const fetchUsers = async () => {
    await fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }

//hook to manipulate the function with the users from the API
  useEffect(() => {
    fetchUsers();
  }, []);

  //hantle function that submit the form to login the user.
  const  handleSubmit = (event)=>{
    event.preventDefault();
    const founded=users.find((user) => (user.username== usernameInputRef.current.value) && (user.password==passwordInputRef.current.value))
    if(founded==undefined){
      //imprimir mensaje de que no se encuentra y hacer focus en el username
      usernameInputRef.current.focus();
    }else {
        myReduce.dispatch({type:'LOGIN', value:usernameInputRef.current.value})
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