import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Sign.css';

function Sign() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/signup')
            .then(response => {
                // Assuming setTasks was intended to set the signup state, but it's not defined in the code
                // setSignup(response.data);
            })
            .catch(error => {
                console.error('Error fetching signup:', error);
            });
    }, []);

    const handleSignup = (event) => {
        event.preventDefault();

        const newSignup = { username, password };

        axios.post('http://localhost:3001/signup', newSignup)
            .then(response => {
                // Assuming setSignup was intended to update the signup state, but it's not defined in the code
                // setSignup([...signup, response.data]);
                setUsername('');
                setPassword('');
                navigate('/home');
            })
            .catch(error => {
                console.error('Error saving signup:', error);
            });
    };

    return (
        <div className="container">
            <div className="lform">
                <h1>Signup</h1>
                <form onSubmit={handleSignup}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">Signup</button>
                    <p className='logsign'>Already have an account? <Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Sign;
