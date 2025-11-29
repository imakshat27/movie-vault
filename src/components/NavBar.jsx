import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar(){
    return <nav className="navbar">
        <div className="nav-brand">
            <Link to="/">MovieVault</Link>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
        </div>
    </nav>
}

export default NavBar;