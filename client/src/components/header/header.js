import React, { PureComponent } from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
    render() {
        return (
            <div id='navbar'>
                <div>
                    <div id='logo-container'>
                        <Link to="/" className='logo'>
                            <img src={Logo} alt="" />
                            <span>Here4You</span>
                        </Link>
                    </div>
                    <ul class="nav-links">
                        <li>
                            <Link to="/">Sign Out</Link>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#profile">My profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}