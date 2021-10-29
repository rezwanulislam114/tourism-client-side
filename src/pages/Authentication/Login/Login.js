import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleLogin, setUser, setError, setLoading } = useAuth()
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))

    }
    return (
        <div className="text-center">
            <h1>Login</h1>
            <button className="btn btn-danger" onClick={handleGoogleLogin}>login with google</button>
        </div>
    );
};

export default Login;