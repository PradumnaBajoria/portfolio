import React from 'react'
import "./Topbar.scss"
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

function Topbar({ menu, setMenu }) {
    return (
        <div className={'topbar ' + (menu && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Resume.</a>
                    <div className="itemContainer">
                        <PersonIcon className='icon' />
                        <span>9924972564</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className='icon' />
                        <span>18bce179@nirmauni.ac.in</span>
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
