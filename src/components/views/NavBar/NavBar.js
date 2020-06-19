import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <div>
            <ul className="nav-bar">
                <li>
                    <Link to="/about" style={{color: 'white'}}>ABOUT ME</Link>
                </li>
                <li>
                    <Link to="/" style={{color: 'white'}}>WELCOME</Link>
                </li>
                <li>
                    <Link to="/project" style={{color: 'white'}}>PROJECT</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
