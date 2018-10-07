import React from 'react';
import '../../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Label, FormGroup, Input } from 'reactstrap';

//Header for application
export default class NameAndDOB extends React.Component {

    render() {

        return (
            <div>

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
            </div>

        );
    }
}