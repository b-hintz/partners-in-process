import React from 'react';
import { Link } from "react-router-dom";

class ProductNav extends React.Component{

    render(){
        return (
        <div className = "pageContainer">
            <div className = "row">
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/AllProducts"}}>
                        <div className = "cat text-center p-3">category 1</div>
                    </Link>
                </div>
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/Cat2"}}>
                        <div className = "cat text-center p-3">category 2</div>
                    </Link>
                </div>
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/Cat3"}}>
                        <div className = "cat text-center p-3">category 3</div>
                    </Link>
                </div>
                <div className = "col-lg-3 mb-3">
                    <Link to={{pathname:"/Cat4"}}>
                        <div className = "cat text-center p-3">category 4</div>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

export default ProductNav;