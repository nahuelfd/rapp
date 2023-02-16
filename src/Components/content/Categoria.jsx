import React from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.idCategoria === id )
            console.log(productosCategoria);
            const cardProducto = productosCategoria.map(producto =>
                <div className="card cardProducto" key={producto.id} style={{ maxWidth: 800 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={producto.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">Género: {producto.genero}</p>
                                <p className="card-text">Sinopsis: {producto.sinopsis}</p>
                                <p className="card-text">Precio: {producto.precio}</p>
                                <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                            </div>
                        </div>
                    </div>
                </div>)

                setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Categoria;
