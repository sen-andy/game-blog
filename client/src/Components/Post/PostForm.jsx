import React from 'react';
import '../form.css';

const PostForm = () => {
    const clearForm = e => {
        console.log(e);
    }

    return (
        <main>
            <div id="form-wrap"  className="max-width">
                <form action='http://localhost:4000/auth/login' method='POST'>
                    <label>Title</label>
                    <input type='text' name='title' />
                    <label>Author</label>
                    <input type='text' name='author' />
                    <label>Body</label>
                    <textarea type='text' name='body' />
                    <div>
                        <button className="rounded-border" type="submit">Create Post</button>
                        <button className="rounded-border" onClick={e => clearForm}>Clear</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default PostForm;