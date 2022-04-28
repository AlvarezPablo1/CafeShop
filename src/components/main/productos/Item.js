import ItemCount from "./ItemCount";

const Item = ({name, id, price, stock, image}) => {
  const onAdd = (count) =>{
    alert(`Has agregado ${count} productos`); 
  };


  return (
    <article className="Producto">
      <img className="ImagenProducto" src={image} alt="productos"></img>
      <h3 className="NombreProducto">{name}</h3>
      <span className="Precio">{price} $</span>
      <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
    </article>
  )
}
export default Item