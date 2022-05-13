import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {

  const[terminar, setTerminar] = useState(false)


  const onAdd = (count) =>{
    setTerminar(true)
    alert(`Has agregado ${count} productos`); 
    };
    
    const {image, name, price, description, stock} = product

  return (
      <article className="Producto">
        <figure><img className="ImagenProducto" src={image} alt="productos"></img></figure>
        <h3 className="NombreProducto">{name}</h3>
        <span className="Precio">{price} $</span>
        <p className="DescripcionProducto">{description}</p>
        {terminar ? (
          <button >
            <Link className="btnCompra" to='/cart'> Terminar Compra </Link>
          </button>
        ) : (<ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        )}
      </article>
  )
}
export default ItemDetail