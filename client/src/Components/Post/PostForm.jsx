import React from 'react';

const PostForm = () => {
    return (
        <form id='form-modal' action='http://localhost:4000/auth/login' method='POST'>
            <label>Title</label>
            <input type='text' name='title' />
            <label>Author</label>
            <input type='text' name='author' />
            <label>Body</label>
            <textarea type='text' name='body' />
        </form>
    );
}

export default PostForm;