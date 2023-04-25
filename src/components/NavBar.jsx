import "../styles/Nav.css"
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;