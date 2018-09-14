import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import { Link } from 'react-router-dom';
import '../css/App.css';

const logo = require('../assets/nab-logo.svg');

//Header for application
export default class Header extends React.Component {
    render() {
        var url = window.location.pathname;
        var urlsplit = url.split("/").slice(-1)[0];

        var isActive1 = urlsplit === 'events' ? 'is-active': '';

        return (
            <div className="event-title">
                <Nav>
                    <NavItem>
                        <NavLink tag={Link} to="/"> <img className="picsWidth" src={logo} alt="" /></NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}