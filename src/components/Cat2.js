import React from 'react';
import Product from './Product';

class Cat2 extends React.Component{
    render(){
        return(
            <div>
                <Product label="Product 1" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            </div>
        )
    }
}

export default Cat2;