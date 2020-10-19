import React from 'react';
import Product from './Product';
import Amamix from '../images/amamix.gif'
import Amaprop from '../images/amaprop.jpg'

class Cat3 extends React.Component{
    render(){
        return(
            <div>
                <h4 className = "text-center" style = {{'font-style': 'italic'}}>Mixer Systems</h4>
                <Product 
                    label="Amamix" 
                    imgSrc = {Amamix} 
                    imgAlt = "Amamix" 
                    description = "Horizontal, close-coupled submersible mixer with self-cleaning ECB propeller, driven by spur gear or directly coupled to motor. Appliations: mixing, homogenizing and thickening municipal or industrial sewage and sludge." 
                />
                <Product 
                    label="Amaprop" 
                    imgSrc = {Amaprop} 
                    imgAlt = "Amaprop" 
                    description = "Horizontal, close-coupled submersible mixer with self-cleaning ECB propeller, driven by coaxial spur gear. Appliations: recirculation, suspension and dispersion of municipal or industrial sewage and sludge." 
                />
                <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
            </div>
        )
    }
}

export default Cat3;