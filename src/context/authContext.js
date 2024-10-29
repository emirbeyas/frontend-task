import React from 'react'
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] =  useState(localStorage.getItem('token') || null);

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    }
    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    }
    const isAuth = token === null ? false : true;

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);