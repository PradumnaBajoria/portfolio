import React from 'react'
import "./Intro.scss"
import Pic from "./../../assets/pic1.jpeg"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={Pic} alt="profile pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey There, I'm</h2>
                    <h1>Pradumna Bajoria</h1>
                    <h3>Web <span></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon className='downArrow' />
                </a>
            </div>
        </div>
    )
}

export default Intro
