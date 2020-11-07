import React from 'react';
import { Link } from "react-router-dom";
import Manlink from './Manlink';
import pnuecon from '../images/pnue-con.jpg';
import tecweigh from '../images/Tecweigh-logo.jpg';

class ProductNav extends React.Component{

    render(){
        return (
        <div className = "pageContainer">
            <div className = "row mb-5 mannav">
                <div className = "col-lg-6">
                    <div className = "mancol text-center py-4">
                        <a href = "https://www.pneumaticconveyingsolutions.com/products-systems">
                            <Manlink href="https://www.pneumaticconveyingsolutions.com/products-systems" src = {pnuecon} alt = "pneu-con" />
                            <p>Learn About Pneu-Con Products Here</p>
                        </a>
                    </div>
                </div>
                <div className = "col-lg-6">
                    <div className = "mancol text-center py-4">
                        <a href = "https://www.tecweigh.com/products">
                            <Manlink href="https://www.tecweigh.com/products" src = {tecweigh} alt = "tecweigh" />
                            <p>Learn About TecWeigh Products Here</p>    
                        </a>               
                    </div>
                </div>
            </div>
            <div className = "row px-4">
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/AllProducts"}}>
                        <div className = "cat text-center p-3">Demo 1</div>
                    </Link>
                </div>
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/Cat2"}}>
                        <div className = "cat text-center p-3">Demo 2</div>
                    </Link>
                </div>
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/Cat3"}}>
                        <div className = "cat text-center p-3">Demo 3</div>
                    </Link>
                </div>
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/Cat4"}}>
                        <div className = "cat text-center p-3">Demo 4</div>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

export default ProductNav;