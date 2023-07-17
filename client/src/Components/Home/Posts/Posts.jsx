import React from 'react';
import Preview from '../Preview/Preview';
import Alert from '../../Alert/Alert';
import './posts.css';

const Posts = ({ posts, isHome }) => {    
    return (
        <div id={ isHome ? "posts-wrap" : "all-posts-wrap" } className="max-width">
            { !posts
                ? <Alert message={"Error while loading, please refresh"} />
                : posts.length === 0
                ? <p>loading</p>
                : posts.map((post, i) => 
                    <Preview key={i}
                        isHero={ isHome && i === 0 }
                        post={post} />) }
        </div>
    )
}

export default Posts;