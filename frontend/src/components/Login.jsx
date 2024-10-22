// src/components/Login.jsx
import React, { useState } from 'react';
import '../styles/Login.css'; // Assuming you have a separate Login.css for these styles
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    // Initialize useNavigate
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await login(email, password);
            setSuccess("Logged in successfully! Redirecting...");
            // Redirect to the dashboard after successful login
            navigate('/dashboard'); // Change '/dashboard' to wherever you want to redirect
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log In to Your Account</h2>
                {error && <div className="login-error-message">{error}</div>}
                {success && <div className="login-success-message">{success}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="login-input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Log In</button>
                </form>
                <p className="login-signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;
