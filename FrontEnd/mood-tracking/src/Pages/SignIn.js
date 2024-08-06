import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            toast.error('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const result = await response.json();
                if (result > 0) {
                    navigate('/home?userId=${result}');
                } else if (result === 0) {
                    toast.error('Please re-enter new username');
                } else {
                    toast.error('Unexpected response from server');
                }
            } else {
                toast.error('Failed to sign in. Please try again later.');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form">
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="signin-button">Sign In</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignIn;
