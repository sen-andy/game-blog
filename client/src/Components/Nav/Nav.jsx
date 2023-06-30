import React from 'react';
import './nav.css';

function Nav() {
    return (
        <nav>
            <div id="nav-wrap">
                <button className="nav-item"><i className="fa-solid fa-bars fa-2xl"></i></button>
                <img className="nav-item" src="./logo.svg" alt="logo" />
                <button className="nav-item"><i className="fa-solid fa-magnifying-glass fa-2xl"></i></button>
            </div>
        </nav>
    );
}

export default Nav;