import React from 'react';
import Logo from '../../images/logo.png';

export default function navbar() {
    return (
        <div id="navbar">
            <div>
                <div id='logo-container'>
                    <a href="./" class="logo">
                        <img src={Logo} alt="" />
                        <span>Here4You</span>
                    </a>
                </div>
                <ul class="nav-links">
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#blogs">Blog</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}