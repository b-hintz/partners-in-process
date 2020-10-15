import React from 'react';
import Product from './Product'

class Cat1 extends React.Component{
    render(){
        return(
            <div>
                <h4 className = "text-center">Category 1</h4>
                <hr/>
                <Product label="Product 1" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 2" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
                <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description" />
            </div>
        )
    }
}

export default Cat1;