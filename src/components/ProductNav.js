import React from 'react';
import { Link } from "react-router-dom";

class ProductNav extends React.Component{

    render(){
        return (
        <div className = "pageContainer">
            <div className = "row">
                <div className = "col-12 mb-5 text-center">
                    <h5>Products</h5>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3 text-center">
                    <Link to={{pathname:"/AllProducts"}}>Category 1</Link>
                </div>
                <div className = "col-3 text-center">
                    <Link to={{pathname:"/Cat2"}}>Category 2</Link>
                </div>
                <div className = "col-3 text-center">
                    <Link to={{pathname:"/Cat3"}}>Category 3</Link>
                </div>
                <div className = "col-3 text-center">
                    <Link to={{pathname:"/Cat4"}}>Category 4</Link>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3 text-center">
                    <img src = "#" />
                </div>
                <div className = "col-3 text-center">
                    <img src = "#" />
                </div>
                <div className = "col-3 text-center">
                    <img src = "#" />
                </div>
                <div className = "col-3 text-center">
                    <img src = "#" />
                </div>
            </div>
            </div>
        )
    }
}

export default ProductNav;