import React from 'react';
import Product from './Product'

const Cat1 = (props) => (
        <div>
            <h4 className = "text-center" style = {{'font-style': 'italic'}}>Category 1</h4>
            <Product label="Product 1" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            <Product label="Product 2" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
        </div>
    )

export default Cat1;