import React from 'react'

const Product = (props) => (

    <div className = "text-center mt-5 product">
        <h4>{props.label}</h4>
        <img src = {props.imgSrc} alt = {props.imgAlt}/>
        <p>{props.description}</p>
    </div>
)

export default Product;