import React, { PureComponent } from 'react';
import Logo from '../../images/logo.png';
import Github from '../../images/github.png';
import {Link} from 'react-router-dom';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <div class="row" id='contact'>
                    <div class="col">
                        <img src={Logo} alt='Logo' class="logo"></img>
                        <p>This is a project is a collaborative effort towards a healthier environment for people with mental health issues, we believe that such issues should be taken seriously and everyone should get the right help. We also believe in open source and thus this project is publicly available and open to contribution.
                        </p>
                    </div>
                    <div class='col'>
                        <h4>Links</h4>
                        <ul>
                        <li><b>&copy; Here4You</b></li>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="https://www.cuchd.in/" target="blank" title='Chandigarh University'>Chandigarh University</a></li>
                            <li><a href="https://github.com/xxEasterGrymm/here4You" target="blank" title='Github'><img src={Github} alt="" id="github"></img></a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul>
                            <li><h3>Reach Out to Us</h3></li>
                            <li>here4you@gmail.com</li>
                            <li>+033 6539 6957</li>
                            <li>Mohali, Punjab</li>
                        </ul>
                    </div>
                    <div class='col'>
                        <ul>
                        <li><h3>Newsletter</h3></li>
                        <li><a href="#">Subscribe</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}