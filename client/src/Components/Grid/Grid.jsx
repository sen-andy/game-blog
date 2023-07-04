import React, { useEffect, useState } from 'react';
import './grid.css';
import Preview from './Preview/Preview';

function Grid() {
    const [ posts, setPost ] = useState([]);

    useEffect(() => {
        const options = {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }
        fetch("http://localhost:4000/post/", options)
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                setPost(data.payload);
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <main>
            <div id="grid-wrap"  className="max-width">
            { !posts ? <p>Error while loading</p> : posts.length === 0 ? <p>loading</p> : posts.map((post, i) => <Preview key={i} post={post} />) }
            </div>
        </main>
    );
}

export default Grid;