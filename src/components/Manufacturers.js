import React from 'react';
import Manlink from './Manlink';
import pnuecon from '../images/pnue-con.jpg';
import tecweigh from '../images/Tecweigh-logo.jpg';


class Manufacturers extends React.Component{

    render(){
        return (
            <div className = "pageContainer">
                <div className = "row mb-5 pt-5 mangroup">
                        <Manlink href="https://www.pneumaticconveyingsolutions.com/" src = {pnuecon} alt = "pnue-con" />
                        <Manlink href="https://www.tecweigh.com/" src = {tecweigh} alt = "tecweigh" />
                </div>
            </div>
        )
    }
}

export default Manufacturers;