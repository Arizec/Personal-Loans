import React from 'react';
import '../../css/App.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


const loanPurposeOptions = [
    { value: 'chocolate', label: 'New car' },
    { value: 'strawberry', label: 'Used car' },
    { value: 'vanilla', label: 'Debt consolidation' }
];

const repaymentFrequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'fortnightly', label: 'Fortnightly' },
    { value: 'monthly', label: 'Monthly' }
];

const loanTermOptions = [
    { value: '1yr', label: '1 year' },
    { value: '2yrs', label: '2 years' },
    { value: '3yrs', label: '3 years' }
];


//Header for application
export default class PersonalDetails extends React.Component {

    constructor () {
        super();

        this.state = {
            peopleNo: "",
            existingCustomer: ""
        }

    }

    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption, type) => {
        this.setState({ selectedOption });
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
        console.log(event.target.value);
    }

    render() {
        console.log("THIS STATE", this.state.peopleNo);
        const { selectedOption } = this.state;
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
                    {
                        this.state.existingCustomer === "YES" ?
                            <div className={"form-item-padding"}>What is your NAB Id? (optional)
                                <Input type="text" name="nabID" id="nabID" placeholder="" />
                            </div>
                            : ''
                    }
                    {this.state.peopleNo === "TWO" ?
                        <div className={"form-item-padding"}>Is the other person an existing customer?
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
                </div>
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
                <div className={"form-item-padding"}>What loan term would you like?
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={loanTermOptions}/>

                </div>
                <div className={"form-item-padding"}>How often would you like to make repayments?
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={repaymentFrequencyOptions}/>
                </div>

                <div className={"form-item-padding"}>What is the main purpose for this loan?
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={loanPurposeOptions}/>
                </div>
                <Button color="danger">Next</Button>
            </div>

        );
    }

}