import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        localStorage.setItem('username', username);
        navigate('/home');
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <div className="lform">
                <form onSubmit={handleSignup}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="email"><b>E</b></label><br />
                    <input type="text" placeholder="Enter email" name="email" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">Signup</button>
                    <p>Already have an account? <a href="/">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
