import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [ cookies ] = useCookies();
    return cookies.token ? children : <Navigate to="/login" />
}

export default PrivateRoute;