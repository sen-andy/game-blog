import React from 'react';
import './post.css';

function Post({ post }) {
	return (
        <div id="post-wrap"  className="max-width">
            <h2>{post.title}</h2>
			<img src={`./gifs/${post.img}`} alt={post.img} />
            {/* <h3>{new Date(post.createdAt).getDate()}</h3> */}
            <div>
                <h3>{post.author}</h3>
                <p>{post.body}</p>
            </div>
		</div>
	)
}

export default Post;