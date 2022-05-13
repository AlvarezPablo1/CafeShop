import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import MenuWidget from "./MenuWidget"

const NavBar = () => {

  return (  
  <div className="navbar">
    <div className="flex-1">
      <Link id="titulo" className="" to ='/CafeShop'>CafeShop</Link>
    </div>
    <div id="navbar" className="">
      <ul className="list">
        <li><Link className="secciones" to='/CafeShop'> About Us</Link></li>
        <li><Link className="secciones" to='/Products'> Products</Link></li>
        <li><Link className="secciones" to='/Reviews'>Reviews</Link></li>
      </ul>
    </div>
    <CartWidget/>
    <MenuWidget/>
  </div>
)
}
export default NavBar