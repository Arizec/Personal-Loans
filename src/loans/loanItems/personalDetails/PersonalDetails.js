import React from 'react';
import '../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import Title from "./personalFormItems/Title";
import MaritalStatus from "./personalFormItems/MaritalStatus";
import FinancialDependants from "./personalFormItems/FinancialDependants";
import TaxPurposes from "./personalFormItems/TaxPurposes";
import NameAndDOB from "./personalFormItems/NameAndDOB";


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
                <NameAndDOB/>
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