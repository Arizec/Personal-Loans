import React from 'react';
import '../css/App.css';
import Header from "./Header";
import { Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import LoanDetails from "./loanItems/loanlDetails/LoanDetails";
import LoanSummary from "./loanSummary";
import PersonalDetails from "./loanItems/personalDetails/PersonalDetails";
import EmploymentDetails from "./loanItems/employmentDetails/EmploymentDetails";
import IncomeDetails from "./loanItems/incomeDetails/IncomeDetails";
import OwnershipDetails from "./loanItems/ownershipDetails/OwnershipDetails";
import LiabilityDetails from "./loanItems/liabilityDetails/LiabilityDetails";

const background = require('../assets/beach.png');

//Loan form for users to fill out
//Loan is divided into sections
export default class Loans extends React.Component {

    //stores user inputted information
    constructor(props){
        super(props);

        this.state={
            loanDetails:true,
            personalDetailsSet: false,
            employmentDetailsSet: false,
            incomeDetailsSet: false,
            ownershipDetailsSet: false,
            liabilityDetailsSet: false,
            loanDetailsProps: {
                amount:"",
                loanType:"",
                peopleNo: "",
                existingCustomer: "",
                existingCustomer2: "",
                nabId: "",
                nabId2:"",
                loanPurpose: null,
                loanTerm: null,
                repaymentFrequency: null
            },
            personalDetailsProps: {

            }


        }

    }

    // user has submitted information pertaining to LOAN DETAILS
    onChangeLoanDetails(response){

        this.setState({
            personalDetailsSet: true
        });
        this.state.loanDetailsProps = response;
    }

    // user has submitted information pertaining to PERSONAL DETAILS
    onChangePersonalDetails(response){
        this.setState({
            employmentDetailsSet: true
        });
    }

    // user has submitted information pertaining to EMPLOYMENT
    onChangeEmploymentDetails(response){
        this.setState({
            incomeDetailsSet: true
        });
    }

    // user has submitted information pertaining to INCOME
    onChangeIncomeDetails(response){
        this.setState({
            ownershipDetailsSet: true
        });
    }

    // user has submitted information pertaining to OWNERSHIP DETAILS
    onChangeOwnershipDetails(response){
        this.setState({
            liabilityDetailsSet: true
        });
    }

    // Display form
    render() {
        var second = false;
        return (
            <div>
                <Header/>
                <img className={"homepage-background"} src={background} alt="" />
                <div className={"contain"}>
                    <span className="loans-container">
                        <Form>
                            <div className={"form-section"}>
                                <h4> Your loan details </h4>
                                <LoanDetails changeState={this.onChangeLoanDetails.bind(this)} loanDetails={this.state.loanDetailsProps}/>
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about yourself </h4>
                                { this.state.personalDetailsSet &&
                                <PersonalDetails changeState={this.onChangePersonalDetails.bind(this)} />}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about your employment </h4>
                                { this.state.employmentDetailsSet &&
                                <EmploymentDetails changeState={this.onChangeEmploymentDetails.bind(this)}/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about what you earn </h4>
                                { this.state.incomeDetailsSet &&
                                <IncomeDetails changeState={this.onChangeIncomeDetails.bind(this)}/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about what you own </h4>
                                { this.state.ownershipDetailsSet &&
                                <OwnershipDetails changeState={this.onChangeOwnershipDetails.bind(this)}/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about what you owe </h4>
                                { this.state.liabilityDetailsSet &&
                                <LiabilityDetails/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Your expenses </h4>
                                { second &&
                                <LoanDetails/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Protecting your loan </h4>
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


            </div>

        );
    }
}