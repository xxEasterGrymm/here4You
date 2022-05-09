import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    render() {
        return (
            <header>
                <nav>
                    <ul class="nav_links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
