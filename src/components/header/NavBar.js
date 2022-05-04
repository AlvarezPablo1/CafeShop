import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (  
  <div className="navbar">
    <div className="flex-1">
      <Link id="titulo" className="" to ='/'>CafeShop</Link>
    </div>
    <div id="navbar" className="">
      <ul className="list">
        <li><Link className="secciones" to='/AboutUs'> About Us</Link></li>
        <li><Link className="secciones" to='/Products'> Products</Link></li>
        <li><Link className="secciones" to='/Reviews'>Reviews</Link></li>
        <li><Link className="secciones" to='/Contact'>Contact</Link></li>
      </ul>
    </div>
    <CartWidget/>
    <FontAwesomeIcon icon={faBars} className="Menu-btn"/>
  </div>
)
}
export default NavBar