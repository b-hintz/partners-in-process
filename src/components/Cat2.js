import React from 'react';
import Product from './Product';
import Hydrogritter from '../images/hydrogritter.jpg'
import Membranes from '../images/membranes.jpg'

class Cat2 extends React.Component{
    render(){
        return(
            <div>
                <h4 className = "text-center" style = {{'font-style': 'italic'}}>Process and Treatment Equipment</h4>
                <Product 
                    label= "Hydrogritter" 
                    imgSrc = {Hydrogritter} 
                    imgAlt = "hydrogritter" 
                    description = "The WEMCO Hydrogritter components are designed as a system to optimize each piece of equipment – both mechanically and hydraulically – to consistently produce long-term, high performance grit removal – automatically – with unmatched reliability, and low operation and maintenance costs. The WEMCO Hydrogritter, Cyclone and Classifier Dewatering Separator system removes and dewaters grit from primary sludge or influent. Protects other equipment from damage and delivers clean, dewatered product for safe transport and disposal."
                />
                <Product 
                    label= "Membranes" 
                    imgSrc = {Membranes}
                    imgAlt = "Product picture" 
                    description = "With membrane bioreactor installations totalling over 450 MGD** of treatment capacity, Suez reinforced hollow fiber membranes are the trusted membrane platform. You’re investing in peace of mind as well as technology." 
                />
                <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
            </div>
        )
    }
}

export default Cat2;