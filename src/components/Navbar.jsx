import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

function Navbar (){
    return(
        <nav className="navbar">
           <div className="nav-center">
            
            <Link to= "/">
              <img src={logo} className="logo"></img>
            </Link>
            
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
           </div>

        </nav>
    )
}

export default Navbar