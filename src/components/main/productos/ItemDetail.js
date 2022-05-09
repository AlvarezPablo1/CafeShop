import { useState } from "react";
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
      <img className="ImagenProducto" src={image} alt="productos"></img>
      <h3 className="NombreProducto">{name}</h3>
      <span className="Precio">{price} $</span>
      <p className="DescripcionProducto">{description}</p>
      {terminar ? (
        <button className="btnCompra">
          terminar compra
        </button>
      ) : (<ItemCount stock={stock} onAdd={onAdd} initial={1}/>
      )}
      
    </article>
  )
}
export default ItemDetail