import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);
    return  !token ? <Navigate to="/login" /> : <Outlet />
}

export default PrivateRoute;