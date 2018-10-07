import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import '../../../../css/App.css';
import CountriesSelect from "react-form-countries-select";
import { FormGroup, Input } from 'reactstrap';
import Select from 'react-select';

const noTinReason = [
    { value: 'no-tin'        , label: "This country doesn't issue TINs" },
    { value: 'not-mandatory' , label: "It's not mandatory for me to disclose my TIN for this country" },
    { value: 'dont-have'     , label: "I don't have a TIN for this country" }
];

//Header for application
export default class TaxPurposes extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedOption: null,
            ausResident: "",
            usResident: "",
            otherCountryResident: ""
        };

    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    onCountrySelect = (event, country) => {
        // event {SyntheticEvent<HTMLSelectElement>} - React HTML event
        // country {Object} - Object representing the state
        // country.name {string} - The full name of the selected country
        // country.abbreviation {string} - The two character country code
    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <div className={"form-item-padding"} onChange={(event)=>{this.setState({ausResident: event.target.value})}}>
                    Are you an Australian resident for tax purposes?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="aus-resident-yes" name="ausResident" value="YES" checked={this.state.ausResident==="YES"}/>
                                <label htmlFor="aus-resident-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="aus-resident-no" name="ausResident" value="NO" checked={this.state.ausResident==="NO"} />
                                <label htmlFor="aus-resident-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>
                {
                    this.state.ausResident === "NO" &&
                    <div className={"red-font"}>
                        ! You must be living in Australia to apply for a NAB personal loan.
                    </div>
                }
                <div className={"form-item-padding"} onChange={(event)=>{this.setState({usResident: event.target.value})}}>
                    Are you a US citizen or US resident for tax purposes?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="us-resident-yes" name="usResident" value="YES" checked={this.state.usResident==="YES"}/>
                                <label htmlFor="us-resident-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="us-resident-no" name="usResident" value="NO" checked={this.state.usResident==="NO"} />
                                <label htmlFor="us-resident-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>

                {
                    this.state.usResident === "YES" &&
                    <div className={"form-item-padding"}>
                        What is your US Taxpayer Identification Number (TIN)
                        <Input type="text" name="usTIN" id="usTIN" />
                    </div>
                }

                <div className={"form-item-padding"} onChange={(event)=>{this.setState({otherCountryResident: event.target.value})}}>
                    Are you a resident of any other country for tax purposes?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="other-country-resident-yes" name="otherCountryResident" value="YES" checked={this.state.otherCountryResident==="YES"}/>
                                <label htmlFor="other-country-resident-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="other-country-resident-no" name="otherCountryResident" value="NO" checked={this.state.otherCountryResident==="NO"} />
                                <label htmlFor="other-country-resident-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>
                {
                    this.state.otherCountryResident === "YES" &&
                    <div>
                        <div className={"form-item-padding"}>
                            <CountriesSelect className={"max-width"} onChange={this.onCountrySelect} />
                        </div>


                        <div className={"form-item-padding"}>
                            What is your US Taxpayer Identification Number (TIN)
                            <Input type="text" name="usTIN" id="usTIN" />
                        </div>
                    </div>

                }

                {
                    this.state.otherCountryResident === "NO" &&
                    <div>

                        <div className={"form-item-padding"}>
                            Please indicate the reason you can't provide the TIN
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={noTinReason}/>
                        </div>
                    </div>

                }

            </div>



        );
    }
}