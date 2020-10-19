import React from 'react';
import Manlink from './Manlink'
import wemco from '../images/wemco.png';
import suez from '../images/suez.png';
import smith from '../images/smith.png';
import hidrostal from '../images/hidrostal.png';
import ksb from '../images/ksb.png';
import flowserve from '../images/flowserve.png'
import mwi from '../images/mwipumps.png';
import screwsucker from '../images/screwsucker.png';
import moyno from '../images/moyno.png'


class Manufacturers extends React.Component{

    render(){
        return (
            <div className = "pageContainer">
                <div className = "row mb-5 mangroup">
                        <Manlink href="https://www.global.weir/" src = {wemco} alt = "wemco" />
                        <Manlink href="https://www.suezwatertechnologies.com/" src = {suez} alt = "suez" />
                        <Manlink href="https://smithandloveless.com/" src = {smith} alt = "smith-loveless" />
                </div>
                <div className = "row mb-5 mangroup">
                        <Manlink href="https://www.moyno.com/" src = {moyno} alt = "moyno" />
                        <Manlink href="https://mwipumps.com/" src = {mwi} alt = "mwi pumps" />
                        <Manlink href="https://www.ksb.com/ksb-us/KSB_in_US/" src = {ksb} alt = "ksb" />
                </div>
                <div className = "row mb-5 mangroup">
                        <Manlink href="https://screwsucker.com/" src = {screwsucker} alt = "screwsucker" />
                        <Manlink href="https://www.flowserve.com/en" src = {flowserve} alt = "flowserve" />
                        <Manlink href="http://www.hidrostalpumps.com/" src = {hidrostal} alt = "hidrostal" />
                </div>
            </div>
        )
    }
}

export default Manufacturers;