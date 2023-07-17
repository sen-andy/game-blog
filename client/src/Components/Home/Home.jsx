import React, { useEffect, useState } from 'react';
import './home.css';
import Posts from './Posts/Posts';
import Alert from '../Alert/Alert';

function Home({ isHome }) {
    const [ posts, setPost ] = useState([]);

    useEffect(() => {
        const options = {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }
        fetch("http://127.0.0.1:4000/post/", options)
            .then(res => res.json())
            .then(data => {
                if (data.error) return setPost(data);
                setPost(data.payload);
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <main>
            { posts.error
                ? <Alert message={posts.error} />
                : <Posts posts={posts} isHome={isHome} /> }
        </main>
    );
}

export default Home;