import React from 'react'
import "./Testimonials.scss"
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import test1 from "./../../assets/test1.jpg"
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Testimonials() {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <TrendingUpRoundedIcon className="left" />
                        <img src={test1} alt="img" />
                        <LinkedInIcon/>
                    </div>
                    <div className="center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi pariatur eveniet eum hic quam! Nemo at accusamus quaerat. 
                        Dolores deleniti reprehenderit accusamus tempore accusantium!
                    </div>
                    <div className="bottom">
                        <h3>Mukesh Ambani</h3>
                        <h4>Founder of Reliance</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
