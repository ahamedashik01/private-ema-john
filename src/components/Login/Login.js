import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className="login-form">
            <div className="form">
                <h2>Login</h2>
                <form onSubmit="">
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
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;