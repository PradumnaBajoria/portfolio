import React from 'react'
import "./Portfolio.scss"
import blog from "./../../assets/blog.png"
import ecom from "./../../assets/ecom.png"

function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Other</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src={blog} alt="img" />
                    <h3>Blog App</h3>
                </div>
                <div className="item">
                    <img src={ecom} alt="img" />
                    <h3>E Commerce App</h3>
                </div>
                <div className="item">
                    <img src={blog} alt="img" />
                    <h3>Blog App</h3>
                </div>
                <div className="item">
                    <img src={blog} alt="img" />
                    <h3>Blog App</h3>
                </div>
                <div className="item">
                    <img src={blog} alt="img" />
                    <h3>Blog App</h3>
                </div>
                <div className="item">
                    <img src={blog} alt="img" />
                    <h3>Blog App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
