// src/components/ErrorPrompt.jsx
import React from 'react';
import '../styles/ErrorPrompt.css';

const ErrorPrompt = ({ message }) => {
    return <div className="error-prompt">{message}</div>;
};

export default ErrorPrompt;
