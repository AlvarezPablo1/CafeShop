import { useEffect, useState } from "react"
import Item from './Item'
import {productList} from "../../../data/ArrayProductos.js";

const ItemList = () => {
  const [Products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try{
      const result = await getProducts;
      setProducts(result);
    }catch (error) {
      console.log(error);
      alert('No podemos mostrarle los productos en este momento. Disculpe las molestias')
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, []);


  return (
    <div className="ProductList-Container">
      {
        Products.length ? (
          <>
          {
            Products.map((product) => {
              return(
                <div key={product.id}>
                  <Item
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                </div>
              );
            })
          } 
          </>
        ) : (
            <p>Cargando productos...</p>
          )
      }
    </div>
  )
}
export default ItemList