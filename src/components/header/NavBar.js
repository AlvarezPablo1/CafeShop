import CartWidget from "./CartWidget"

const NavBar = () => {
  return (  
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a href="./main/AboutUs.js" id="titulo" className="btn btn-ghost normal-case text-xl">CafeShop</a>
    </div>
    <div id="navbar" className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><a href=".">About Us</a></li>
        <li><a href=".">Products</a></li>
        <li><a href=".">Reviews</a></li>
        <li><a href=".">Contact</a></li>
      </ul>
    </div>
    <CartWidget/>
  </div>
)
}
export default NavBar