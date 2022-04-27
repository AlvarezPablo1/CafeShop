import { useState } from "react"

const ItemCount = () => {
  const [count, setCount] = useState(0)

  const sum = () => {
    setCount(count + 1)
  }
  const rest = () => {
    setCount(count - 1)
  }
  return (
    
    <div>
      <button onClick={rest}>-</button>
      {count}
      <button onClick={sum}>+</button>
      <button>agregar al carrito</button>
    </div>
  )
}
export default ItemCount