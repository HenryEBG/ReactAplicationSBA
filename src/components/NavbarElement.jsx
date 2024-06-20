import { Link } from "react-router-dom"
function NavbarElement({link,text,classname}){
  return(
    <Link className={classname} to={link}>{text}</Link>
  )
}

export default NavbarElement