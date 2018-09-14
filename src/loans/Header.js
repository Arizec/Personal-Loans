import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import { Link } from 'react-router-dom';
import '../css/App.css';

//Header for application
export default class Header extends React.Component {
    render() {
        var url = window.location.pathname;
        var urlsplit = url.split("/").slice(-1)[0];

        var isActive1 = urlsplit === 'events' ? 'is-active': '';
        var isActive2 = urlsplit === 'user-management' ? 'is-active': '';

        return (
            <div className="event-title">
                <h3>{this.props.adminName}</h3>
                <Nav>
                    <NavItem>
                        <NavLink className={isActive1} tag={Link} to="/">Home</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}