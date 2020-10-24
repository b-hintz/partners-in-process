import React from 'react';
import Product from './Product';
import Amamix from '../images/amamix.gif'
import Amaprop from '../images/amaprop.jpg'

class Cat3 extends React.Component{
    render(){
        return(
            <div>
                <h4 className = "text-center" style = {{'font-style': 'italic'}}>Category 3</h4>
                <Product label="Product 1" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
                <Product label="Product 2" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
                <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
            </div>
        )
    }
}

export default Cat3;