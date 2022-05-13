import { Link } from "react-router-dom";

const Item = ({product}) => {

  const {image, name, price, id} = product

  return (
    <article className="Producto">
      <figure><img className="ImagenProducto" src={image} alt="productos"></img></figure>
      <h3 className="NombreProducto">{name}</h3>
      <span className="Precio">{price} $</span>
      <br/> 
        <button>
          <Link className="btnCompra" to={`/item/ ${id}`}> Ver Mas</Link>
        </button>
    </article>
  )
}
export default Item