import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Form() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                email, password, passwordVerify
            };

        await axios.post("http://localhost:5000/auth/", registerData);

        } catch(err) {
            console.error(err);
        }
    }

    async function login(e) {
        e.preventDefault();

        try {
            const loginData = {
                email, password
            };

        await axios.post("http://localhost:5000/auth/login", loginData);

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <br />
            <br />
            <div className={isActive ? "cont" : "cont s--signup"}>
                <form className="form sign-in" onSubmit={login}>
                    <h2>Welcome</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit">Sign In</button>

                </form>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">

                            <h3>Don't have an account? Please Sign up!</h3>
                        </div>
                        <div className="img__text m--in">

                            <h3>If you already has an account, just sign in.</h3>
                        </div>
                        <div className="img__btn" onClick={handleToggle}>
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <form className="form sign-up" onSubmit={register}>
                        <h2>Create your Account</h2>
                        <label>
                            <span>Email</span>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </label>
                        <label>
                            <span>Confirm Password</span>
                            <input type="password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
                        </label>
                        <button type="submit" className="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}