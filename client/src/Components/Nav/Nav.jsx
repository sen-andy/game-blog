import React, { useState, useEffect } from 'react';
import Menu from './Menu/Menu';
import './nav.css';

function Nav() {
    const [ isOpen, setOpen ] = useState(false);

    useEffect(() => {
        document.addEventListener("mouseup", () => {
            if (!isOpen) return;
            setOpen(false);
        });
    });

    function clickHandler() {
        setOpen(!isOpen);
    }

    return (
        <nav>
            <div id="nav-wrap" className="max-width">
                { isOpen ? <Menu /> : <></>}
                <button className="icon anim-hover-sm" onClick={clickHandler}><i className="fa-solid fa-bars fa-2xl"></i></button>
                <img className="icon anim-hover-sm" src="./logos/logo.svg" alt="logo" />
                <button className="icon anim-hover-sm"><i className="fa-solid fa-magnifying-glass fa-2xl"></i></button>
            </div>
        </nav>
    );
}

export default Nav;