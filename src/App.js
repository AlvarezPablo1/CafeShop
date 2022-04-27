import NavBar from './components/header/NavBar';
import AboutUs from './components/main/AboutUs';
import Products from './components/main/productos/Products';
import Reviews from './components/main/Reviews';
import Contact from './components/main/Contact';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar/>
      </header>
      
      <main>
        <Products/>
        <AboutUs/>
        <Reviews/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
