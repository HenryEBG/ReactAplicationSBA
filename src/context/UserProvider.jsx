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
  category:"all",
  cart: {}
}
//create the function called for the dispatch element of 
//the reduce hook
const sessionReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':

    state.userLogin=true;
    state.username=action.value;
    state.name=action.value;
    return {...state}
    case 'FILTER':
      state.category=action.value;
      return {...state}
    default:
      return state;
  }


}









//create the provider of the context hook
const UserProvider = ({ children }) => {
  //create the usereducer hook
  const [state, dispatch] = useReducer(sessionReducer, sessionState);


  return (
    <UserContext.Provider value={{ 
      userLogin: sessionState.userLogin, 
      username: sessionState.username, 
      name: sessionState.name, 
      products: sessionState.products, 
      users: sessionState.users, 
      dispatch }}>
      {children}
    </UserContext.Provider>
  )

}
//export the provider and the personal hook
export { UserProvider, useUserContext }