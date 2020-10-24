import React from 'react';
import Product from './Product';
import Hydrogritter from '../images/hydrogritter.jpg'
import Membranes from '../images/membranes.jpg'

class Cat2 extends React.Component{
    render(){
        return(
            <div>
                <h4 className = "text-center" style = {{'font-style': 'italic'}}>Category 2</h4>
                <Product label="Product 1" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
                <Product label="Product 2" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
                <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
            </div>
        )
    }
}

export default Cat2;