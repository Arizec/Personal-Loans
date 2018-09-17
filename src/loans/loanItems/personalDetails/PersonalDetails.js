import React from 'react';
import '../../../css/App.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import LoanPurposeOptions from "./LoanPurposeOptions";
import RepaymentFrequencyOptions from "./RepaymentFrequencyOptions";
import LoanTermOptions from "./LoanTermOptions";

//Header for application
export default class PersonalDetails extends React.Component {

    constructor () {
        super();

        this.state = {
            peopleNo: "",
            existingCustomer: "",
            existingCustomer2: ""
        }

    }

    setPeopleNo(event) {
        this.setState({
            peopleNo: event.target.value,
        });
    }

    setIsExistingCustomer(event) {
        this.setState({
            existingCustomer: event.target.value,
        });
    }

    setIsExistingCustomer2(event) {
        this.setState({
            existingCustomer2: event.target.value,
        });
    }


    render() {

        return (
            <div>
                <div className={"form-item-padding"} onChange={this.setPeopleNo.bind(this)}>How many people are applying?
                    <FormGroup check>
                        <Label check >
                            <Input type="radio" name="radioPeopleNo" value="ONE"/>{' '}
                            1 person
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioPeopleNo" value="TWO"/>{' '}
                            2 people
                        </Label>
                    </FormGroup>

                </div>
                <div className={"form-item-padding"} onChange={this.setIsExistingCustomer.bind(this)}>Are you an existing customer?
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioIsExistingCustomer" value="YES"/>{' '}
                            Yes
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioIsExistingCustomer" value="NO"/>{' '}
                            No
                        </Label>
                    </FormGroup>

                </div>
                {
                    this.state.existingCustomer === "YES" ?
                        <div className={"form-item-padding"}>What is your NAB Id? (optional)
                            <Input type="text" name="nabID" id="nabID" placeholder="" />
                        </div>
                        : ''
                }
                {this.state.peopleNo === "TWO" ?
                    <div className={"form-item-padding"} onChange={this.setIsExistingCustomer2.bind(this)}>Is the other person an existing customer?
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radioIsExistingCustomer2" value="YES"/>{' '}
                                Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radioIsExistingCustomer2" value="NO"/>{' '}
                                No
                            </Label>
                        </FormGroup>

                    </div> :
                    ''
                }
                {
                    this.state.existingCustomer2 === "YES" ?
                        <div className={"form-item-padding"}>What is the other persons NAB Id? (optional)
                            <Input type="text" name="nabID2" id="nabID2" placeholder="" />
                        </div>
                        : ''
                }
                <div className={"form-item-padding"}>How much would you like to borrow?
                    <Input type="text" name="loanAmount" id="loanAmount" placeholder="$" />
                </div>
                <div className={"form-item-padding"}>Would you like a fixed or variable interest rate?
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioInterestRate" />{' '}
                            Variable
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioInterestRate" />{' '}
                            Fixed
                        </Label>
                    </FormGroup>

                </div>
                <LoanTermOptions/>
                <RepaymentFrequencyOptions/>
                <LoanPurposeOptions/>
                <Button color="danger">Next</Button>
            </div>

        );
    }

}