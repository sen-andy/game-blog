import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div id="nav-menu" className="rounded-border">
            <Link to="/" id="home-btn">Home</Link>
            <Link to="/posts" id="all-posts-btn">All Posts</Link>
            <Link to="/create" id="create-post-btn">Create Post</Link>
            <a href="#footer">Contact Me</a>
        </div>
    );
}

export default Menu;