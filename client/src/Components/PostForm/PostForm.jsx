import { useState } from 'react';
import './postForm.css';
import '../form.css';

const PostForm = ({ sessionToken }) => {
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ body, setBody ] = useState("");

    const clearForm = e => {
        e.preventDefault();
        setTitle("");
        setAuthor("");
        setBody("");
    }

    const submitPost = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            body: JSON.stringify({ title, author, body }),
            headers: new Headers({
                "Content-Type": "application/json",
                authorization: sessionToken
            })
        };

        await fetch("http://localhost:4000/post/", options)
            .then(res => res.json())
            .then(data => console.log(data));
        
        clearForm();
    }

    return (
        <main>
            <div id="form-wrap"  className="max-width">
                <form>
                    <h1>Create Post</h1>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <label>Body</label>
                    <textarea
                        type='text'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                    <div id="buttons">
                        <button className="rounded-border" onClick={submitPost}>Create Post</button>
                        <button className="rounded-border" onClick={clearForm}>Clear</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default PostForm;