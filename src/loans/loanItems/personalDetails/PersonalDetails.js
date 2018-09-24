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
                    <FormGroup>
                        <ul className="radio-button">
                            <li className>
                                <input type="radio" id="peopleNo1" name="peopleNo" value="ONE"/>
                                <label htmlFor="peopleNo1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="peopleNo2" name="peopleNo" value="TWO" />
                                <label htmlFor="peopleNo2">2</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>
                <div className={"form-item-padding"} onChange={this.setIsExistingCustomer.bind(this)}>Are you an existing customer?
                    <FormGroup>
                        <ul className="radio-button">
                            <li className>
                                <input type="radio" id="existingCustomerYes" name="existingCustomer" value="YES"/>
                                <label htmlFor="existingCustomerYes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="existingCustomerNo" name="existingCustomer" value="NO" />
                                <label htmlFor="existingCustomerNo">No</label>
                            </li>
                        </ul><br/><br/>

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
                        <FormGroup>
                            <ul className="radio-button">
                                <li className>
                                    <input type="radio" id="existingCustomer2Yes" name="existingCustomer2" value="YES"/>
                                    <label htmlFor="existingCustomer2Yes">Yes</label>
                                </li>
                                <li>
                                    <input type="radio" id="existingCustomer2No" name="existingCustomer2" value="NO" />
                                    <label htmlFor="existingCustomer2No">No</label>
                                </li>
                            </ul><br/><br/>

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
                    <FormGroup>
                        <ul className="radio-button">
                            <li className>
                                <input type="radio" id="variableInterest" name="interestRate" />
                                <label htmlFor="variableInterest">Variable</label>
                            </li>
                            <li>
                                <input type="radio" id="fixedInterest" name="interestRate" />
                                <label htmlFor="fixedInterest">Fixed</label>
                            </li>
                        </ul><br/><br/>

                    </FormGroup>


                </div>
                <LoanTermOptions/>
                <RepaymentFrequencyOptions/>
                <LoanPurposeOptions/>
                <Button color="#c20000">Next</Button>
            </div>

        );
    }

}