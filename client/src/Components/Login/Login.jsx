import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import '../form.css';

function Login({ updateLocalToken }) {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const submitLogin = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }

        await fetch("/auth/login", options)
            .then(res => res.json())
            .then(data => updateLocalToken(data.token))
            .catch(err => console.log(err.message));
        
        navigate("/create", { replace: true });
    }

    return (
        <main>
            <div id="login-wrap" className="max-width">
                <form action="">
                <h1>Login</h1>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div id="buttons">
                        <button onClick={submitLogin} className="rounded-border">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;