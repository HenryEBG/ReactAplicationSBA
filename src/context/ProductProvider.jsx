import { useReducer, createContext, useContext } from "react";

//create a new Context called Products
const ProductContext = createContext();
const useProductContext = () => {
  return useContext(ProductContext);
}
const productState = {
  products: {}
}
//create the function called for the dispatch element of 
//the reduce hook
const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      console.log(state)
    state.products=action.value;
    console.log(state)
    return {...state}
    
    default:
      return state;
  }

}


//create the provider of the context hook
const ProductProvider = ({ children }) => {
  //create the usereducer hook
const [state,dispatch] = useReducer(productReducer,productState);
return (
  <ProductContext.Provider value={{ products:productState.products, dispatch }}>
    {children}
  </ProductContext.Provider>
)

}
//export the provider and the personal hook
export { ProductProvider, useProductContext }