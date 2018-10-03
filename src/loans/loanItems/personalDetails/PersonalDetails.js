import React from 'react';
import '../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Title from "./Title";


//Header for application
export default class PersonalDetails extends React.Component {

    constructor (props) {
        super(props);

    }

    render() {

        return(
            <div>
                <h5> Personal details</h5>
                <Title/>


            </div>
        )

    }

}