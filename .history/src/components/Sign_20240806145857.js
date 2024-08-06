import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sign.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/signup', { username, email, password });
            if (response.data.success) {
                localStorage.setItem('username', username);
                navigate('/home');
            } else {
                alert('Signup failed');
            }
        } catch (error) {
            console.error('There was an error signing up!', error);
        }
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <div className="lform">
                <form onSubmit={handleSignup}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="email"><b>Email</b></label><br />
                    <input type="text" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br />
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
