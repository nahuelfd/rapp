import React from 'react';
import { Link } from 'react-router-dom';


const Form = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre y Apellido</label>
                <input type="text" className="form-control" />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Enviaremos la factura a esta dirección</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Domicilio</label>
                <input type="text" className="form-control" />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">DNI</label>
                <input type="Numb" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <textarea name="consulta" rows={10} cols={190} defaultValue={"Si es necesario, añada especificaciones del lugar de la entrega. Ej: Departamento de pasillo, local comercial, etc."} />
            </div>
            <div className='button'>
                <Link><button type="submit" className="btn btn-primary backbut">Finalizar compra</button></Link>
            </div>
            
        </form>

    );
}

export default Form;
