import React from 'react';
import '../css/App.css';
import Header from "./Header";
import { Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LoanDetails from "./loanItems/loanlDetails/LoanDetails";
import LoanSummary from "./loanSummary";
import PersonalDetails from "./loanItems/personalDetails/PersonalDetails";
import EmploymentDetails from "./loanItems/employmentDetails/EmploymentDetails";
import IncomeDetails from "./loanItems/incomeDetails/IncomeDetails";
import OwnershipDetails from "./loanItems/ownershipDetails/OwnershipDetails";
import LiabilityDetails from "./loanItems/liabilityDetails/LiabilityDetails";
import ExpenseDetails from "./loanItems/expenseDetails/ExpenseDetails";
import ProtectingLoanDetails from "./loanItems/protectingLoanDetails/ProtectingLoanDetails";
import AlmostFinishedDetails from "./loanItems/almostFinished/almostFinishedDetails";

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
            expenseDetailsSet: false,
            protectingLoanSet: false,
            almostFinishedSet: false,
            loanDetailsProps: {
                loanAmount: "",
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
                title: "",
                firstName: "",
                middleName: "",
                lastName: "",
                maritalStatus: "",
                dependents: "",
                driversLicence: "",
                ausResident: ""

            },
            employmentDetailProps: {
                employmentStatus: null,
                employerName: "",
                jobTitle: "",
                startDate: ""

            },


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

        this.state.personalDetailsProps = response;
    }

    // user has submitted information pertaining to EMPLOYMENT
    onChangeEmploymentDetails(response){
        this.setState({
            incomeDetailsSet: true
        });

        this.state.employmentDetailProps = response;
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

    // user has submitted information pertaining to LIABILITIES
    onChangeLiabilityDetails(response){
        this.setState({
            expenseDetailsSet: true
        });
    }

    // user has submitted information pertaining to EXPENSES
    onChangeExpensesDetails(response){
        this.setState({
            protectingLoanSet: true
        });
    }

    // user has submitted information pertaining to PROTECTING LOAN DETAILS
    onChangeProtectingLoanDetails(response){
        this.setState({
            almostFinishedSet: true
        });
    }

    // Display form
    render() {
        return (
            <div>
                <Header/>
                <img className={"homepage-background"} src={background} alt="" />
                <div className={"contain"}>
                    <span className="loans-container">
                        <Form>
                            <div className={"form-section"}>
                                <h4> Your loan details </h4>
                                <LoanDetails changeState={this.onChangeLoanDetails.bind(this)}
                                             loanDetails={this.state.loanDetailsProps}/>
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about yourself </h4>
                                { this.state.personalDetailsSet &&
                                <PersonalDetails changeState={this.onChangePersonalDetails.bind(this)}
                                                 personalDetails={this.state.personalDetailsProps}/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Tell us about your employment </h4>
                                { this.state.employmentDetailsSet &&
                                <EmploymentDetails changeState={this.onChangeEmploymentDetails.bind(this)}
                                                   employmentDetails={this.state.employmentDetailProps}/>}
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
                                <LiabilityDetails changeState={this.onChangeLiabilityDetails.bind(this)}/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Your expenses </h4>
                                { this.state.expenseDetailsSet &&
                                <ExpenseDetails changeState={this.onChangeExpensesDetails.bind(this)}/>}
                            </div>

                            <div className={"form-section"}>
                                <h4> Protecting your loan </h4>
                                { this.state.protectingLoanSet &&
                                <ProtectingLoanDetails changeState={this.onChangeProtectingLoanDetails.bind(this)}/>}
                            </div>

                            <div className={"last-form-section"}>
                                <h4> Almost finished </h4>
                                { this.state.almostFinishedSet &&
                                <AlmostFinishedDetails/>}
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