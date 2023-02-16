import {Link} from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle butnav" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item nav-link-light" to={`/categoria/cienciaFiccion`}>Ciencia Ficción</Link>
                    <Link className="dropdown-item nav-link-light" to={`/categoria/novelasRomanticas`}>Novelas Románticas</Link>
                    <Link className="dropdown-item nav-link-light" to={`/categoria/infantil`}>Infantiles</Link>
                    <Link className="dropdown-item nav-link-light" to={`/categoria/empresarial`}>Empresarial</Link>
                    <Link className="dropdown-item nav-link-light" to={`/categoria/policiales`}>Policiales</Link>
                </div>
            </li>
        </>
    );
}

export default ItemListContainer;
