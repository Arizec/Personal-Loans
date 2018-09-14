import React from 'react';
import '../css/App.css';
import Header from "./Header";
const background = require('../assets/beach.png');

//Shows all admin users that can currently manage the event
//Allows main admin to add other admin or invite attendee users
export default class Loans extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className={"admin-events"}>
                    <div className="container">
                        <img className={"homepage-background"} src={background} alt="" />
                            <div className="centered">Centered</div>
                    </div>
                </div>
            </div>

        );
    }
}