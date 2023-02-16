import React from 'react';

const Contacto = () => {
    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm));
        
    }
    return (
        <>
            <div className="container">
                <form onSubmit={consultarForm} ref={datosFormulario}>


                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" />
                    </div>

                    <div className="mb-3 form-check">
                        <textarea name="consulta" rows={10} cols={50} defaultValue={"Deje su consulta aquí"} />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar consulta</button>
                </form>

            </div>

        </>
    );
}

export default Contacto;
