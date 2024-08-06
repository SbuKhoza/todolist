import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from './sqlUtil';
import './Sign.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = getUser(username, password);

        if (user) {
            localStorage.setItem('username', username);
            navigate('/home');
        } else {
            alert('Invalid Credentials');
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="lform">
                <form onSubmit={handleLogin}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">Login</button>
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
