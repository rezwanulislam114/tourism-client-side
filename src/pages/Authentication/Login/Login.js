import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleLogin, user } = useAuth()
    const handleGoogleLogin = () => {
        googleLogin()
    }
    return (
        <div className="text-center">
            <h1>Login</h1>
            <button className="btn btn-danger" onClick={handleGoogleLogin}>login with google</button>
        </div>
    );
};

export default Login;