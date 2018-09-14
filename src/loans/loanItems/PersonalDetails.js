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
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption, type) => {
        this.setState({ selectedOption });
    }

    render() {

        const { selectedOption } = this.state;
        return (
            <div>
                <div className={"form-item-padding"}>How many people are applying?
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            1 person
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            2 people
                        </Label>
                    </FormGroup>

                </div>
                <div className={"form-item-padding"}>Are you an existing customer?</div>
                <div className={"form-item-padding"}>How much would you like to borrow?</div>
                <div className={"form-item-padding"}>Would you like a fixed or variable interest rate?</div>
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