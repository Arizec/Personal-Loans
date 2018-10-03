import React from 'react';
import '../css/App.css';
import Header from "./Header";
import { Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import LoanDetails from "./loanItems/loanlDetails/LoanDetails";
import LoanSummary from "./loanSummary";

const background = require('../assets/beach.png');

//Shows all admin users that can currently manage the event
//Allows main admin to add other admin or invite attendee users
export default class Loans extends React.Component {

    constructor(props){
        super(props);
    }
    state={
        personalDetails:<LoanDetails/>
    }



    render() {
        var second = false
        console.log(this.state)
        return (
            <div>
                <Header/>
                <img className={"homepage-background"} src={background} alt="" />
                <div className={"contain"}>
                    <span className="left">
                        <Form>
                            <div className={"form-section"}>
                                <h4> Your loan details </h4>
                                    {this.state.personalDetails}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about yourself </h4>
                                { second &&
                                <LoanDetails/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Your employment details </h4>
                                { second &&
                                <LoanDetails/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about what you earn </h4>
                                { second &&
                                <LoanDetails/>}
                            </div>

                            <div className={"last-form-section"}>
                                <h4> Almost finished </h4>
                                { second &&
                                <LoanDetails/>}
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