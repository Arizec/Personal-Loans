import React from 'react';
import '../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import Title from "./Title";
import MaritalStatus from "./personalFormItems/MaritalStatus";
import FinancialDependants from "./personalFormItems/FinancialDependants";
import TaxPurposes from "./personalFormItems/TaxPurposes";


//Header for application
export default class PersonalDetails extends React.Component {

    constructor (props) {
        super(props);

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
                <TaxPurposes/>
            </div>
        )

    }

}