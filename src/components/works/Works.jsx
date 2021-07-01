import React from 'react'
import "./Works.scss"
import blog from "./../../assets/blog.png"
import blogIcon from "./../../assets/blogIcon.jpg"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { featuredPortfolio } from "./../../project"
import { useState } from 'react';

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = featuredPortfolio

    const handleClick = (param) => {
        (param === "left") ? 
            setCurrentSlide(
                (currentSlide > 0) ? (currentSlide-1) : (data.length - 1)
            ) : 
            setCurrentSlide(
                (currentSlide < (data.length - 1)) ? (currentSlide + 1) : 0
            )
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(item => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={item.icon} alt="img" />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={item.img} alt="img" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={() => handleClick("left")} />
            <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick("right")} />
        </div>
    )
}

export default Works
