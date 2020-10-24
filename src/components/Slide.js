import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/farm.jpg'
import pic2 from '../images/fishing.webp'
import pic3 from '../images/stock 4.jpg'

const Slide = (props) => (
    <div className = "slideshow mx-3 py-5">
        <Carousel className='carousel' interval={4800} keyboard={false} pauseOnHover={true}>
            <Carousel.Item>
                <img style={{'height':"40vh"}} className="d-block mx-auto w-100" src={pic1} alt="pic 1"/>
                <Carousel.Caption>
                    <h3 style={{'font-weight': 'bold'}}>Offering the best equipment</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{'height':"40vh"}} className="d-block mx-auto w-100" src={pic2} alt= "pic 2"/>
                <Carousel.Caption>
                    <h3 style = {{'font-weight': 'bold'}}>Have questions? Drop us a line</h3>
                </Carousel.Caption>
            </Carousel.Item  >
            <Carousel.Item>
                <img style={{'height':"40vh"}} className="d-block mx-auto w-100" src={pic3} alt="pic 3" />
                <Carousel.Caption>
                    <h3 style = {{'font-weight': 'bold'}}>Working with you to meet your needs</h3>
                </Carousel.Caption>
            </Carousel.Item  >
        </Carousel> 
    </div>
)

export default Slide