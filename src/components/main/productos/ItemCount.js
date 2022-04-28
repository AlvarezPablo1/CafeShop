import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
  
  const [count, setCount] = useState(initial);

  const addProduct = (num) => {
    setCount(count + num)
  }
  return (
    <>
      <div className="productos"> 
        <div className="botones">
          <button className="btn" onClick={() => addProduct(-1)} disabled={count === initial ? true : null}>-</button>
          <span className="numero">{count}</span>
          <button  className="btn" onClick={() => addProduct(+1)} disabled={count === stock ? true : null}>+</button>
        </div>
        <div className="btnCompra">
          <button onClick={() => onAdd(count)}>Añadir</button>
        </div>
      </div>
      
    </>
  )
}
export default ItemCount