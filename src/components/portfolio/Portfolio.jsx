import React, { useState } from 'react'
import "./Portfolio.scss"
import blog from "./../../assets/blog.png"
import ecom from "./../../assets/ecom.png"
import PortfolioList from '../portfolio-list/PortfolioList'

function Portfolio() {

    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "react",
            title: "React"
        },
        {
            id: "other",
            title: "Other"
        }
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                        id={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected} 
                    />
                ))}
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
