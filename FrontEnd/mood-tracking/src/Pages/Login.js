import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import loginImg from './Images/Background/moodFrontPage.jpg';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpClick = () => {
        navigate('/signin');
    };

    const handleLoginClick = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const loginData = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const userId = await response.json();
                if (userId > 0) {
                    navigate('/home', { state: { userId } });// Navigate to Home.js page 
                } else if (userId === 0) {
                    toast.error('The Username is Incorrect');
                } else if (userId === -1) {
                    toast.error('The Password is Incorrect');
                } else{
                    toast.error('Error');
                }
            } else {
                toast.error('Login failed. Please try again later.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src={loginImg} alt="MoodDiary" />
            </div>
            <div className="login-form">
                <h1>MoodDiary</h1>
                <form onSubmit={handleLoginClick}>
                    <div className="input-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            placeholder="Enter your username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="login-button">Login</button>
                        <span className="or-text">or</span>
                        <button type="button" className="signin-button" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
