import React from 'react';
import Product from './Product';
import Motorpump from '../images/motorpumps.gif'
import Screwsucker from '../images/screwsucker.jpg'

class Cat4 extends React.Component{
    render(){
        return(
            <div>
                <h4 className = "text-center" style = {{'font-style': 'italic'}}>Portable Pumping Systems</h4>
                <Product 
                    label="Submersible Motor Pumps" 
                    imgSrc = {Motorpump} 
                    imgAlt = "Product picture" 
                    description = "We offer a variety of pumps for temporary solutions for limited downtime for pump repairs or temporary facilities" 
                />
                <Product 
                    label="Screwsucker" 
                    imgSrc = {Screwsucker} 
                    imgAlt = "screw sucker" 
                    description = "Skid or Trailer mounted Diesel or electric driven portable pumps for sewer bypass, slurry pumping, tank draining, and temporary facilities. Hidrostal Screw-Centrifugal Pump. Vacuum assisted Dry Priming. Indefinite Dry Running. Whisper Quiet 55 dbA @ 23 ft. Long run times."
                />
                <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
            </div>
        )
    }
}

export default Cat4;