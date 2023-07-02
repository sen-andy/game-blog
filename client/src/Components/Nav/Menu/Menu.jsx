import React from 'react';
import './menu.css'

function Menu() {
    return (
        <div id="nav-menu" className="rounded-border">
            <button id="home-btn">Home</button>
            <button id="all-posts-btn">All Posts</button>
            <button id="create-post-btn">Create Post</button>
            <a href="#footer">Contact Me</a>
        </div>
    );
}

export default Menu;