import React from 'react';
import '../css/App.css';

const logo = require('../assets/nab-logo.svg');
const iconlock = require('../assets/icon-lock.svg');

//Header for application
export default class Header extends React.Component {
    render() {

        return (
            <div className="topnav">
                <span className="topnav-left">
                    <a href="https://www.nab.com.au/">
                        <img src={logo} alt="Home - NAB" id="nab-logo-image"/>
                    </a>
                    <p >NAB Personal Loan</p>
                </span>
                <span className="topnav-right">
                    <a href="/">
                        <img className="lock-icon" src={iconlock} alt="Lock icon"/>
                    </a>
                    <p>
                        Secured by NAB
                    </p>
                </span>
            </div>

        );
    }

}