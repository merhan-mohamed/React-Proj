import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Ultra Profile</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Work</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Portofolio</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
    )
}

export default Navbar