import React from 'react'
import "./Topbar.scss"
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import resume from  "../../assets/Pradumna.pdf"

function Topbar({ menu, setMenu }) {
    return (
        <div className={'topbar ' + (menu && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href={resume} target="_blank" rel="noreferrer" className='logo'>Resume.</a>
                    <div className="itemContainer">
                        <a href="#contact"><MailIcon className='icon' /></a>
                        <span>18bce179@nirmauni.ac.in</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/PradumnaBajoria" target="_blank" rel="noreferrer"><GitHubIcon className='icon' /></a>
                        <span>Github</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/pradumna-bajoria-0bbb36169/" target="_blank" rel="noreferrer"><LinkedInIcon className='icon' /></a>
                        <span>Linkedin</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenu(!menu)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
