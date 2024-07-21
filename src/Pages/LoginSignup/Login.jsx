import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch('/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ username, password })
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Login failed');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         setSuccessMessage(data.message);
    //         setErrorMessage('');
    //         setUsername("");
    //         setPassword("");
    //         setIsLoggedIn(true);
    //         setLoggedInUser(data.user);
    //         localStorage.setItem('isLoggedIn', 'true');
    //         localStorage.setItem('loggedInUser', JSON.stringify(data.user));
    //     })
    //     .catch(error => {
    //         console.error('Error logging in:', error);
    //         setErrorMessage('Wrong username or password');
    //         setSuccessMessage('');
    //     });
    // };

    return (
        <>
            <div id='main'>
                <Navbar isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />

                <div className="login-container">
                    <h2>Login</h2>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
                {successMessage && (
                    <div className='successMessage'>
                        <p>{successMessage}</p>
                        <Link to="/">Go to Homepage</Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Login;
