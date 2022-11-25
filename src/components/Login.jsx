import React from 'react';

function Login() {
    return (
        <div>
            <div className="login-box">
                <h1>Login</h1>
                <form action="index.html">
                    <label className="labels">E-Mail</label>
                    <input type="email" placeholder="" required="" />
                    <br />
                    <label className="labels">Password</label>
                    <input type="password" placeholder="" required="" />
                    <br />
                    <input type="submit" defaultValue="Submit" required="" />
                </form>
            </div>
            <p className="para-2">
                Don't have an account?<a href="./Signup">Sign-up here</a>
            </p>
        </div>
    );
}

export default Login;