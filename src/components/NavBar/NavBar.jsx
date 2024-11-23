import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand  navbar-dark" id="navBar">
            <div className="container-fluid">
            
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/remeras">Remeras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/buzos">Buzos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/camisetas">Camisetas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>                    
                </ul>
               

                <div className="d-flex align-items-center">
                    <div className="input-group" id="buscadorDiv">
                        <input type="text" id="buscador" className="form-control" placeholder="Buscar productos..." />
                        <button id="btnBuscar" className="btn btn-primary">Buscar</button>
                    </div>
                    <ul id="nav-menu" className="navbar-nav ms-3">
                        <li className="nav-item">
                            <a href="#" id="btnCarrito" className="nav-link">
                                <i className="bi bi-cart"></i> Carrito (<span id="carrito-icon">0</span>)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default NavBar