import React from 'react'
import "./Works.scss"
import blog from "./../../assets/blog.png"
import blogIcon from "./../../assets/blogIcon.jpg"


function Works() {
    return (
        <div className='works' id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={blogIcon} alt="img" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    fugiat perferendis tempora beatae vel sint eum in quia?
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={blog} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
