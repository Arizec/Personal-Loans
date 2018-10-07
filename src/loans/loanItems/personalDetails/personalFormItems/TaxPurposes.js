import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import '../../../../css/App.css';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import Select from 'react-select';


//Header for application
export default class TaxPurposes extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            ausResident: "",
            usResident: "",
            otherCountryResident: ""
        };

    }


    render() {

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
            </div>



        );
    }
}