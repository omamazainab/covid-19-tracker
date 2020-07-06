import React from 'react'
import logo from '../../logo.png';
import './Header.css'

const Header = () => {
    return (
        
            <div className="image-container">
                <img src={logo} alt="logo" height="100px" width="100px"/>
                <h1>Track Covid-19</h1>
            </div>
            
       
    )
}

export default Header
