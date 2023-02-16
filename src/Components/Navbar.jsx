import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg backnav">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor02">
                    
                    <ul className="navbar-nav me-auto">
                    <ItemListContainer />
                        <li className="nav-item">
                            <Link className="nav-link butnav" to={"/Contacto"}>Contacto</Link>
                        </li>
                    </ul>
                    <div>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/carrito"><button className='btn btn-light'><i className="fas fa-shopping-cart"></i></button></Link>
                        </li>
                        <li>
                        <Link className="nav-link" to={"/"}><button className='btn btn-light'><i className="fa-solid fa-house" /></button></Link>
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
