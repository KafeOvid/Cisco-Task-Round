// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL to your backend

export const signup = async (email, password) => {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
};

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};
