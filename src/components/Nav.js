import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <div className>
    <div className = "row logobar">
        <div className = "col-8 pt-5">
        <Link to={{pathname: "/"}} className= 'logo'>Company Logo</Link>
        </div>
        <div className = "col-4 pt-5 contact">
            <p>Phone: (555)555-5555</p>
            <p>Email: email@email.com</p>

        </div>
    </div>
    <div className = 'row navbar text-center'>
        <Link to={{pathname:"/"}} className = "link">About Us</Link>
        <Link to={{pathname: "/AllProducts"}} className = "link">Products</Link>
        <Link to={{pathname: "/Manufacturers"}} className = "link">Manufacturers</Link>
        <Link to={{pathname: "/Contact"}} className = "link">Contact Us</Link>
    </div>
    </div>
)

export default Nav