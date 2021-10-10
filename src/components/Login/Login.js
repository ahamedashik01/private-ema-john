import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div className="form">
                <h2>Login</h2>
                <form >
                    <input className="input" type="email" name="" id=""
                        placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="" id=""
                        placeholder="Password" />
                    <br />
                    <input className="btn-regular" type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <br /> <Link to="/register">Create Account</Link></p>
                <div>Or</div>
                <hr />
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;