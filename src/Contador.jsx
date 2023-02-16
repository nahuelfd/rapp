import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <button className='btn btn-dark'>Sumar</button>
            <h1>{contador}</h1>
            <button className='btn btn-light'>Restar</button>
            
        </div>
    );
}

export default Contador;
