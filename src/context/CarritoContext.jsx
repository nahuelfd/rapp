import React, {createContext, useState} from 'react';


const CarritoContext = createContext()
const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == prod.id)
        

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const prodCarrito = {...prod, cantidad: cant}
            aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))

    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == prod.id)

        aux.splice(indice, 1)
        setCarrito(structuredClone(aux))
    }

    const clearCart = () => setCarrito([]);

    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }

    return (
        <div>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, precioTotal, clearCart}}>
                    {props.children}
            </CarritoContext.Provider>
        </div>
    );
}

export {CarritoContext, CarritoProvider};
