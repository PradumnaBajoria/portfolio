import React, { useState } from 'react'
import "./Portfolio.scss"
import PortfolioList from '../portfolio-list/PortfolioList'
import {
    featuredPortfolio,
    reactPortfolio,
    otherPortfolio
} from "./../../project"
import { useEffect } from 'react'
import blog from "./../../assets/blog.png"

function Portfolio() {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    
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

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "react":
                setData(reactPortfolio)
                break;
            case "other":
                setData(otherPortfolio)
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])

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
                
                    {data.map(item => (
                        <div className="item">
                            <img src={item.img} alt="img" />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                    {/* <div className="item">
                        <img src={blog} alt="img" />
                        <h3>Test</h3>
                    </div> */}
               
            </div>
        </div>
    )
}

export default Portfolio
