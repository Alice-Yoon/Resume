import React from 'react';
import './header.css';
import mypic from '../../../img/mypic3.jpeg';

function Header() {
    return (
        <div className="header-container">
                <img src={mypic} alt="mypic" className="header-image" />
        </div>
    )
}

export default Header
