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
            ausResident: ""
        };

    }


    render() {

        return (

            <div className={"form-item-padding"} onChange={(event)=>{this.setState({ausResident: event.target.value})}}>How many people are applying?
                <FormGroup>
                    <ul className="radio-button">
                        <li >
                            <input type="radio" id="aus-resident-yes" name="ausResident" value="YES" checked={this.state.ausResident=="YES"}/>
                            <label htmlFor="aus-resident-yes">Yes</label>
                        </li>
                        <li>
                            <input type="radio" id="aus-resident-no" name="ausResident" value="NO" checked={this.state.ausResident=="NO"} />
                            <label htmlFor="aus-resident-no">No</label>
                        </li>
                    </ul><br/><br/>
                </FormGroup>

            </div>

        );
    }
}