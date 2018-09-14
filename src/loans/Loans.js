import React from 'react';
import '../css/App.css';
import Header from "./Header";

//Shows all admin users that can currently manage the event
//Allows main admin to add other admin or invite attendee users
export default class Loans extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className={"admin-events"}>
                    <h3>Invite admin or user members to the event</h3>
                    Current members
                </div>
            </div>

        );
    }
}