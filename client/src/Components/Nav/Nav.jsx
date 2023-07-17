import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu/Menu';
import './nav.css';

function Nav() {
    const [ isOpen, setOpen ] = useState(false);
    const menu = useRef();
    useEffect(() => {
        function closeMenu(e) {
            if (isOpen && menu.current && !menu.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mouseup", closeMenu);

        return () => {
            document.removeEventListener("mouseup", closeMenu);
        }
    }, [ isOpen ]);
    
    
    const clickHandler = () => {
        setOpen(!isOpen);
    }

    const toggleMenuIcon = () => {
        return isOpen ? <i className="fa-solid fa-xmark fa-2xl"></i> : <i className="fa-solid fa-bars fa-2xl"></i>;
    }
    
    return (
        <nav>
            <div ref={menu} id="nav-wrap" className="max-width">
                { isOpen ? <Menu /> : null }
                <button className="icon anim-hover-sm" onClick={clickHandler}>{toggleMenuIcon()}</button>
                <img className="icon anim-hover-sm" src="/logos/logo.svg" alt="logo" />
                <button className="icon anim-hover-sm"><i className="fa-solid fa-magnifying-glass fa-2xl"></i></button>
            </div>
        </nav>
    );
}

export default Nav;