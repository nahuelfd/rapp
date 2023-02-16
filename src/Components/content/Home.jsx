import React, { useState, useEffect } from 'react';
import { consultarBDD } from '../../utils/funciones.js';
import { Link } from 'react-router-dom';


const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProducto = productos.map(producto =>
                <div className="card mb-3" style={{ maxWidth: 800 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={producto.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body row">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">Género: {producto.genero}</p>
                                <p className="card-text">Sinópsis: {producto.sinopsis}</p>
                                <p className="card-text">Precio: {producto.precio}</p>
                                <button className='btn backbut'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                            </div>
                        </div>
                    </div>
                </div>)

            setProductos(cardProducto)
        })
    }, []);

    return (
        <div className="row">
            {productos}
        </div>
    );
}

export default Home;
