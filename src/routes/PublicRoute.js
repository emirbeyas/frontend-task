import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PublicRoute = ({ children }) => {
    const { isAuth } = useAuth();

    return !isAuth ? children : <Navigate to="/profile" />;
};

export default PublicRoute;