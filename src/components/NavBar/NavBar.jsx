import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg h-150 bg-danger ">
        <div className="container-fluid">
            <NavLink  to='/'>
                <a className="col-6 navbar-brand text-white fs-3" href="#">LaCava.com</a>
            </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="container-fluid navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className=" col-3 nav-item ">
                    <NavLink  to='/categoria/Vinos' className="nav-link text-white" >Vinos</NavLink>
                </li>
                <li className="col-3 nav-item">
                    <NavLink  to='/categoria/Whiskies' className="nav-link text-white ">Whiskies</NavLink>
                </li>
                <li className="col-3 nav-item">
                    <NavLink  to='/categoria/Espumantes' className="nav-link text-white ">Espumantes</NavLink>
                </li>
                <li className="col-3 nav-item">
                    <NavLink  to='/categoria/Cervezas' className="nav-link text-white ">Cervezas</NavLink>
                </li>   
                <li>
                    <div>    
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                </li>
            </ul>
        </div>
        </div>
  </nav>
  )
}
