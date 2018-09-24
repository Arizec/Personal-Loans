import React from 'react';
import '../css/App.css';
import Header from "./Header";
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import PersonalDetails from "./loanItems/personalDetails/PersonalDetails";
import LoanSummary from "./loanSummary";

const background = require('../assets/beach.png');

//Shows all admin users that can currently manage the event
//Allows main admin to add other admin or invite attendee users
export default class Loans extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loanDetails: true
        }
    }

    state = {
        numberOfPeople:2,
        borrowAmount: 5000,
        loanPeriod: 5,
        estimatedRepayment:115
    }

    handleLanguage(langValue){
        this.setState({loanDetails: langValue});
    }

    render() {
        var second = false
        return (
            <div>
                <Header/>
                <img className={"homepage-background"} src={background} alt="" />
                <div className={"contain"}>
                    <span className="left">
                        <Form>
                            <div className={"form-section"}>
                                <h4> Your loan details </h4>
                                {   this.state.loanDetails &&
                                    <PersonalDetails onSelectLanguage={this.handleLanguage}/>
                                }
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about yourself </h4>
                                { second &&
                                <PersonalDetails/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Your employment details </h4>
                                { second &&
                                <PersonalDetails/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about what you earn </h4>
                                { second &&
                                <PersonalDetails/>}
                            </div>

                            <div className={"last-form-section"}>
                                <h4> Almost finished </h4>
                                { second &&
                                <PersonalDetails/>}
                            </div>
                        </Form>
                    </span>
                    <span className="right">
                        <LoanSummary
                            numberOfPeople={this.state.numberOfPeople}
                            borrowAmount= {this.state.borrowAmount}
                            loanPeriod= {this.state.loanPeriod}
                            estimatedRepayment={this.state.estimatedRepayment}
                        />
                    </span>
                </div>


                    {/*<div className="container">*/}
                        {/*<img className={"homepage-background"} src={background} alt="" />*/}
                            {/*<div className="centered">hi</div>*/}
                    {/*</div>*/}
            </div>

        );
    }
}