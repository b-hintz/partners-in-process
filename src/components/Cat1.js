import React from 'react';
import Product from './Product'
import Pump from '../images/pump1.jpg'
import sewatec from '../images/sewatec.gif'

const Cat1 = (props) => (
        <div>
            <h4 className = "text-center" style = {{'font-style': 'italic'}}>Pumping Equipment</h4>
            <Product 
                label="Moyno Progressive Cavity Pumps" 
                imgSrc = {Pump} 
                imgAlt = "Moyno Progressive Cavity Pumps"
                description = "Moyno, Inc. is a leading manufacturer and marketer of Moyno® progressing cavity pumps, sludge pumps, metering pumps, sanitary pumps, multiphase fluids transfer systems"
            />
            <Product 
                label="KSB Sewatec/Sewabloc" 
                imgSrc = {sewatec} 
                imgAlt = "KSB Sewatec/Sewabloc" 
                description = "Vertical or Horizontal  dry pit, Handling all types of wastewater and Stormwater wide range of impeller selections. Tandem Oil bath Mechanical Seals Flexible intallations sizes up to 20″. flows up to 15,000 GPM. Head up to 145 psi"
            />
            <Product label="Product 3" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            <Product label="Product 4" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
            <Product label="Product 5" imgSrc = "#" imgAlt = "Product picture" description = "Product description"/>
        </div>
    )

export default Cat1;