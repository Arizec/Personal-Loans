import React from 'react';
import '../../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import {Label, FormGroup, Input } from 'reactstrap';

const livingSituation = [
    { value: 'renting'               , label: 'Renting' },
    { value: 'home-owner-noMortgage' , label: 'Home owner (no mortgage)' },
    { value: 'home-owner-mortgage'   , label: 'Home owner (with mortgage)' },
    { value: 'parent-relative'       , label: 'Living with parent/relative' },
    { value: 'boarding'              , label: 'Boarding' },
    { value: 'employer-supplied'     , label: 'Employer supplied' }
];


//Header for application
export default class IsAusResident extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedOption: null,
            addressesMatch: ""
        };

    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };


    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <h5> Where do you live?</h5>
                <div className={"form-item-padding"}>
                    Residential status
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={livingSituation}/>
                </div>
                <div className={"form-item-padding"}>
                    Residential address
                    <Input type="text" name="address" id="address" />
                </div>
                <div className={"form-item-padding"}>
                    <FormGroup>
                        <Label for="exampleDate">When did you move to this address?</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                    </FormGroup>
                </div>
                <div className={"form-item-padding"} onChange={(event)=>{this.setState({addressesMatch: event.target.value})}}>
                    Is your postal address the same as your residential address?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="addressesMatch" name="addressesMatch" value="YES" checked={this.state.addressesMatch === "YES"}/>
                                <label htmlFor="addressesMatch">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="addressesDontMatch" name="addressesMatch" value="NO" checked={this.state.addressesMatch === "NO"} />
                                <label htmlFor="addressesDontMatch">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>
                </div>
                {
                    this.state.addressesMatch === "NO" &&
                    <div className={"form-item-padding"}>
                        Postal address
                        <Input type="text" name="postal-address" id="postal-address" />
                    </div>
                }
                <h5> Your contact details</h5>
                <div className={"form-item-padding"}>
                    Mobile phone
                    <Input type="text" name="mobile" id="mobile" />
                </div>
                <div className={"form-item-padding"}>
                    Email address
                    <Input type="text" name="email" id="email" />
                </div>

            </div>

        );
    }
}