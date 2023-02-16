import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import'../Styles/App.css'
//import CartContainer from './CartContainer';
import Carrito from './content/Carrito';
import Home from './content/Home';
import About from './content/About';
import Contacto from './content/Contacto';
import Producto from './content/Producto';
import Footer from './content/Footer';
import Categoria from './content/Categoria';
import Form from './content/Form';
function App() {
    return (
        <>
            
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producto/:id" element={<Producto/>} />
                <Route path="/categoria/:id" element={<Categoria/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path="*" element={<h1>Error 404</h1>}/>
                <Route path="/form" element={<Form/>}/>
              </Routes>
              <Footer/> 
            </BrowserRouter>
        </>
    );
}

export default App;
