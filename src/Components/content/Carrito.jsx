import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { mostrarCarrito } from '../../utils/funciones';
import { Link } from 'react-router-dom';
const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto, clearCart, precioTotal} = useContext(CarritoContext)
    const precioT = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }
    const [carritoLocal, setCarritoLocal] = useState([])

   
    useEffect(() => {
        const prodMostrar = carrito.map(producto => 
            <div className="card sm-12" style={{ maxWidth: 800 }} key={producto.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                            <img src={producto.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body row">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text pSize">Cantidad: {producto.cantidad}</p>
                            <p className='card-text pSize'>Subtotal: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark backbut' onClick={() => quitarProducto(producto)}>Eliminar producto</button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
        );
        
        setCarritoLocal(prodMostrar)
    }, [carrito]);

    const app = (carrito.lenght != 0) ? <div className='row divcart'> {carritoLocal} <h5>Total: ${precioTotal()} </h5> <h7><button className='btn btn-light backbut' onClick={()=> clearCart()}>Vaciar Carrito</button> </h7> <h7><Link to={"/Form"}><button className='btn btn-light backbut'>Continuar al pago</button></Link></h7> </div>  : <> <h1 color='white'>Tu carrito está vacío</h1> 
    <button className='btn btn-secondary'>Home</button></>

    return app

   
    }
    
    

    

export default Carrito;
