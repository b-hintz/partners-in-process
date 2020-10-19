import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <div>
    <div className = "row logobar">
        <div className = "col-lg-9 pt-5">
        <Link to={{pathname: "/partners-in-process"}} className= 'logo'>Company Logo</Link>
        </div>
        <div className = "col-lg-3 pt-5 contact">
            <p>Phone: (555)555-5555</p>
            <p>Email: email@email.com</p>

        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className = "navbar-nav">
            <li className="nav-item mx-5">
            <Link to={{pathname:"/partners-in-process"}} className = "nav-link">About Us</Link>
            </li>
            <li className="nav-item mx-5">
            <Link to={{pathname: "/AllProducts"}} className = "nav-link">Products</Link>
            </li>
            <li className="nav-item mx-5">
            <Link to={{pathname: "/Manufacturers"}} className = "nav-link">Manufacturers</Link>
            </li>
            <li className="nav-item mx-5">
            <Link to={{pathname: "/Contact"}} className = "nav-link">Contact Us</Link>
            </li>
        </ul>
    </div>
    </nav>
    </div>
)

export default Nav