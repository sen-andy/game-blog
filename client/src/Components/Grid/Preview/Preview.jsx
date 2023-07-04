import React from 'react';
import './preview.css';

function Preview({ post }) {
    return(
        <div id="preview-post" className="anim-hover">
            <img src={`./gifs/${post.img}`} alt={post.img} />
            <h3>{post.timestamp}</h3>
            <div>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default Preview;