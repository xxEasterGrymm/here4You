import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <br />
            <br />
            <div className={isActive ? "cont" : "cont s--signup"}>
                <div className="form sign-in">
                    <h2>Welcome</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <Link to='/join'><button type="button" className="submit">Sign In</button></Link>

                </div>
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
                    <div className="form sign-up">
                        <h2>Create your Account</h2>
                        <label>
                            <span>Name</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <Link to='/join'><button type="button" className="submit">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}