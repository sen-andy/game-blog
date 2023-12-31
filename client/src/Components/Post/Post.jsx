import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from '../Alert/Alert'
import './post.css';

const Post = () => {
    const { post_id } = useParams();
    const [ selectedPost, setSelectedPost ] = useState({});

    useEffect(() => {
        const options = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }

        fetch(`/post/${post_id}`, options)
            .then(res => res.json())
            .then(data => {
                if (data.error) return setSelectedPost(data);
                setSelectedPost(data.payload);
            })
            .catch(err => console.log(err.message));
    }, [post_id]);

	return (
        <main>
            <div id="post-wrap"  className="max-width">
                { selectedPost.error
                    ? <Alert message={selectedPost.error.message} />
                    : !selectedPost.img
                    ? <p>loading</p>
                    : 
                    (<div>
                        <img src={`/gifs/${selectedPost.img}`} alt={selectedPost.img} />
                            {/* <h3>{new Date(selectedPost.createdAt).getDate()}</h3> */}
                        <h1>{selectedPost.title}</h1>
                        <div>
                            <p>{selectedPost.body}</p>
                        </div>
                    </div>)
                }
            </div>
        </main>
	)
}

export default Post;