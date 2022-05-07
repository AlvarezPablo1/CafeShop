import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import {productList} from "../../../data/ArrayProductos.js";

const ItemList = () => {
  const [Products, setProducts] = useState([]);

  const getProducts = new Promise((resolve) =>{
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
      {Products.map( p => <ItemDetail key={p.id} product={p}/>
      )}
    </div>
  )
}
export default ItemList