import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

export default class Hero extends PureComponent {
    render() {
        return (
            <div>
                <Link className="header_link" to="/registration">Register Now</Link>
            </div>
        )
    }
}
