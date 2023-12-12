import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"





function NavBar(){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 mt-1" style={{border:'1px solid black'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'} href="#">Your_Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to={'/'} href="#">Home</Link>
                    <Link to={'/products'} className="nav-link" href="#">Products</Link>
                    <Link to={'/cat'} className="nav-link" href="#">Cart</Link>
                </div>
                </div>
            </div>
            <CartIcon/>
        </nav>
    )
}

export default NavBar