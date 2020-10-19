import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => (

    <div className = "product my-5">
        <div className = "text-center mb-3">
            <h4 className = "mb-2">{props.label}</h4>
            <img src = {props.imgSrc} alt = {props.imgAlt} style = {{'width': '100%'}}/>
        </div>
        <p>{props.description}</p>
        <Link to={{pathname: '/Contact'}}>
            <button className = "btn btn-secondary" onClick = {props.onclick}>Learn More</button>
        </Link>
    </div>
)

export default Product;