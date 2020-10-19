import React from 'react';

const Manlink = (props) => (

            <div className = "manlink m-3 text-center"> 
                <a href = {props.href} target = "_blank">
                    <img src = {props.src} alt = {props.alt} />
                </a>
            </div>

)

export default Manlink