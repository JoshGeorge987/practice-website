import "../assets/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        <span className="glyphicon glyphicon-tower nav-icon"><i className="nav-icon-text">Rook</i></span>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        {(path == "/") 
                            ? <li className="active"><Link to="/">Home</Link></li>
                            : <li><Link to="/">Home</Link></li>
                        }
                        {(path == "/about") 
                            ? <li className="active"><Link to="/about">About</Link></li>
                            : <li><Link to="/about">About</Link></li>
                        }
                        {(path == "/contact") 
                            ? <li className="active"><Link to="/contact">Contact</Link></li>
                            : <li><Link to="/contact">Contact</Link></li>
                        } 
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/signup"><span className="glyphicon glyphicon-user nav-icon"></span> Sign Up</a>
                        </li>
                        <li>
                            <a href="/signin"><span className="glyphicon glyphicon-log-in nav-icon"></span> Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}