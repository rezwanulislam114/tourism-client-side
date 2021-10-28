import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleLogin, user } = useAuth()
    const handleGoogleLogin = () => {
        googleLogin()
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>login with google</button>
            <h2>{user?.displayName}</h2>
        </div>
    );
};

export default Login;