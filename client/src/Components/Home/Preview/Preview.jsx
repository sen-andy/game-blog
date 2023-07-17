import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './preview.css';

const Preview = ({ post, isHero }) => {
    const [ currentImg, setCurrentImg ] = useState(`${post.img.slice(0, -4)}.png`);

    const navigate = useNavigate();

    const selectPost = post => {
        navigate(`/post/${post._id}`);
    }

    const playGif = () => {
        setCurrentImg(post.img)
    }

    const stopGif = () => {
        setCurrentImg(`${post.img.slice(0, -4)}.png`);
    }

    return(
        <div
            onClick={ e => selectPost(post) }
            onMouseEnter={e => playGif()}
            onMouseLeave={e => stopGif()}
            className={`${ isHero ? "hero-post" : "preview-post" } anim-hover`}
        >
            <img src={`./gifs/${currentImg}`} alt={post.img.slice(0, -4)} />
            {/* <h3>{new Date(post.createdAt).getDate()}</h3> */}
            <div>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default Preview;