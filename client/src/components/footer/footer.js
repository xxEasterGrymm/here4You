import React, { PureComponent } from 'react'
import Logo from 'E:/here4u new/here4You/client/src/images/logo.png'

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <div class="row">
                    <div class="col">
                        <img src={Logo} alt='Logo' class="logo"></img>
                        <p>This portion of the page will consist of 
                            brief information about the website. There will 
                            also be some links included along side for
                            navigation across different pages of the website.
                            and this is a sample text.
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
