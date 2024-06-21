import { useReducer, createContext, useContext } from "react";


//create a new Context called UserContext
const UserContext = createContext();
//Asign the new Context to a personal hook
const useUserContext = () => {
  return useContext(UserContext);
}
//create the initial state for the reduce hook
//I called sessionState because will control the variables of the session
const sessionState = {
  userLogin: false,
  username: "",
  name: "",
  category: "all",
  cart: []
}
//create the function called for the dispatch element of 
//the reduce hook
const sessionReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      state.userLogin = true;
      state.username = action.value;
      state.name = action.value;
      return { ...state }

    case 'LOGOUT':
      console.log("ingrese")
      console.log(state)
      state.userLogin = false;
      state.username = "";
      state.name = "";
      return { ...state }
    case 'ADD_PRODUCT':
      console.log(state)
      let newState = { ...state }
      newState = { ...newState, cart: [...newState.cart, action.value] }
      return newState
    case 'FILTER': {
      state.category = action.value;
      return { ...state }
    }
    default:
      return state;
  }


}

//create the provider of the context hook
const UserProvider = ({ children }) => {
  //create the usereducer hook
  const [state, dispatch] = useReducer(sessionReducer, sessionState);


  return (

    // we add the initial state to the context provider.
    <UserContext.Provider value={{
      userLogin: state.userLogin,
      username: state.username,
      name: state.name,
      category: state.category,
      cart: state.cart,
      dispatch
    }}>
      {children}
    </UserContext.Provider>
  )

}
//export the provider and the personal hook
export { UserProvider, useUserContext }