import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (  
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a href="./main/AboutUs.js" id="titulo" className="btn btn-ghost normal-case text-xl"><Link to='/AboutUs'>CafeShop</Link></a>
    </div>
    <div id="navbar" className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><Link to='/AboutUs'> About Us</Link></li>
        <li><Link to='/Products'> Products</Link></li>
        <li><Link to='/Reviews'>Reviews</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </div>
    <CartWidget/>
  </div>
)
}
export default NavBar