import React from 'react';
import pnuecon from '../images/pnue-con.jpg';
import tecweigh from '../images/Tecweigh-logo.jpg';

class ManNav extends React.Component {

    render (){
        return (
            <div className = "text-center">
                <div className = "m-5">
                    <p>Proudly Offering Products From: </p>
                </div>
                <div className = "m-5">
                    <a href = "https://www.pneumaticconveyingsolutions.com/products-systems">
                        <img src = {pnuecon} alt = "pneu-con" className = "prodimg" />
                    </a>
                </div>
                <div className = "m-5">
                    <a href = "https://www.tecweigh.com/products">
                        <img src = {tecweigh} alt = "tecweigh" className = "prodimg" />  
                    </a>               
                </div>
            </div>
        )
    }
}

export default ManNav;