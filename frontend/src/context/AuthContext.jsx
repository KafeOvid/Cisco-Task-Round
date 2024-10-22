import React, { createContext, useContext, useState } from 'react';
import { signup, login } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSignup = async (email, password) => {
        const userData = await signup(email, password);
        setCurrentUser(userData); // Update state with user data
    };

    const handleLogin = async (email, password) => {
        const userData = await login(email, password);
        setCurrentUser(userData); // Update state with user data
    };

    return (
        <AuthContext.Provider value={{ currentUser, signup: handleSignup, login: handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
