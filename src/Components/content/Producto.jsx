import React, { useState, useEffect } from 'react';
import DetalleProducto from './DetalleProducto';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const producto1 = productos.find(productosArray => productosArray.id == id)
            setProducto(producto1)
        })
    }, [])

    return (
        <>
            <div className="card mb-3 row" style={{ maxWidth: 540 }}>
                <DetalleProducto producto={producto}/>
            </div>

        </>
    );
}

export default Producto;
