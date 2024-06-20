import NavbarElement from "./NavbarElement"

const Navbar = ({user}) => {
  return (
    <nav className="navbar">
      <NavbarElement link="/" text={<>Welcome to my API Store <b>Henry</b></>} classname="welcome" />
      {/* <div className="container px-4 px-lg-5 d-flex justify-content-between"> */}
       
         {/* <Link className="navbar-brand" to={"/"}>Welcome to my API Store <b>Henry</b></Link> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="list">
              
             { user ? ( 
              <>
              <NavbarElement link="/" text={<>Filter <select name="categories" id="categories"><option value="">All Products </option> </select></>} classname="navItem" /> 
              <NavbarElement link="/cart" text={<>Cart</>} classname="navItem" />
              <NavbarElement link="/login" text={<>Logout</>} classname="navItem" />
              </>
              ): (
              <NavbarElement link="/login" text={<>Login</>} classname="navItem" />
              )}
            
                     
          </ul>
        {/* </div> */}
      {/* </div> */}
    </nav>

  )
}

export default Navbar