import React from 'react';
import Slide from './Slide';


class About extends React.Component{

    render(){
        return (
            <div>
            <div className = "row py-5">
                <Slide />
            </div>
            <div className = "row about">
                <h3>Company Message</h3>
            </div>
            <div className = "row py-5 about">
                <p>Company background here. Company background here. Company background here. Company background here. Company background here.
                    Company background here. Company background here. Company background here. Company background here. Company background here. 
                    Company background here. Company background here. Company background here. Company background here. Company background here. 
                    Company background here. Company background here. Company background here. Company background here. Company background here. 
                    Company background here. Company background here. Company background here. Company background here. Company background here.</p>
            </div>
            </div>
        )
    }
}

export default About;