import React from 'react';
import '../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import Title from "./Title";
import MaritalStatus from "./MaritalStatus";
import FinancialDependants from "./FinancialDependants";


//Header for application
export default class PersonalDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            ausResident: ""
        };

    }

    render() {

        return(
            <div>

                <h5> Personal details</h5>

                <Title/>

                <div className={"form-item-padding"}>
                    First name
                    <Input type="text" name="firstName" id="firstName" />
                </div>

                <div className={"form-item-padding"}>
                    Middle name (Optional)
                    <Input type="text" name="middleName" id="middleName" />
                </div>

                <div className={"form-item-padding"}>
                    Last name
                    <Input type="text" name="lastName" id="lastName" />
                </div>

                <div className={"form-item-padding"}>
                    <FormGroup>
                        <Label for="exampleDate">Date of birth</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                    </FormGroup>
                </div>

                <MaritalStatus/>
                <FinancialDependants/>

                <div className={"form-item-padding"}>
                    Driver's licence number (Optional)
                    <Input type="text" name="licenceNo" id="licenceNo" />
                </div>

                <div className={"form-item-padding"} onChange={(event)=>{this.setState({peopleNo: event.target.value})}}>How many people are applying?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="peopleNo1" name="peopleNo" value="ONE" checked={this.state.ausResident=="ONE"}/>
                                <label htmlFor="peopleNo1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="peopleNo2" name="peopleNo" value="TWO" checked={this.state.ausResident=="TWO"} />
                                <label htmlFor="peopleNo2">2</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>
            </div>
        )

    }

}