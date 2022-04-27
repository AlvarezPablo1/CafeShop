import NavBar from './components/header/NavBar';
import AboutUs from './components/main/AboutUs';
import Products from './components/main/Products';
import Reviews from './components/main/Reviews';
import Contact from './components/main/Contact';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar/>
      </header>

      <main>
        <br/><br/><br/>
        <AboutUs/>
        <br/><br/><br/>
        <h2 className='SubTitulos'>Productos</h2>
        <br/><br/><br/>
        <Products/>
        <br/><br/><br/>
        <h2 className='SubTitulos'>Reviews</h2>
        <br/><br/><br/>
        <Reviews/>
        <br/><br/><br/>
        <h2 className='SubTitulos'>Contacto</h2>
        <br/><br/><br/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
