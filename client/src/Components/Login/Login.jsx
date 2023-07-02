import React from 'react';

function Login() {
    return (
        <form action='http://localhost:4000/auth/login' method='POST'>
            <input type='email' name='email' placeholder='ex. andy.cool'></input>
            <input type='password' name='password' placeholder='ex. bean89dk'></input>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Login;