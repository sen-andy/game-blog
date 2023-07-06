import React from 'react';
import '../form.css';

function Login() {
    return (
        <main>
            <form action='http://localhost:4000/auth/login' method='POST'>
                <input type='email' name='email' placeholder='ex. andy.cool'></input>
                <input type='password' name='password' placeholder='ex. bean89dk'></input>
                <button type='submit'>Submit</button>
            </form>
        </main>
    );
}

export default Login;