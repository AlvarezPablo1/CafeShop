import { Routes, Route} from 'react-router-dom';
import NavBar from './components/header/NavBar';
import AboutUs from './components/main/AboutUs';
import Cart from './components/main/productos/Cart';
import ItemDetailContainer from './components/main/productos/ItemDetailContainer';
import Products from './components/main/Products';
import Reviews from './components/main/Reviews';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
          <Routes>
            <Route path='/'>
              <Route path='/CafeShop' element={<AboutUs/>}/>
              <Route path='/Products' element={<Products/>}/>
              <Route path='/Reviews' element={<Reviews/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
              <Route className="textoPaginaNoEncontrada" path='*' element={<main><p>Pagina no encontrada</p></main>}/>
            </Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
