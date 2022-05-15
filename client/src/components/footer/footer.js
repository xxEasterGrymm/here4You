import React, { PureComponent } from 'react'
import Logo from '../../images/logo.png'

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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="">University</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Chandigarh University</h3>
                        <p>Mohali, Punjab</p>
                    </div>
                    <div class='col'>
                        <h3>Newsletter</h3>
                    </div>
                </div>
            </footer>
        )
    }
}