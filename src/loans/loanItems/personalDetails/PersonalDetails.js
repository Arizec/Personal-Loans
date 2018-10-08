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
import IsAusResident from "./personalFormItems/IsAusResident";


//Header for application
export default class PersonalDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            ausResidentSet: ""
        };


        this.handleClick=this.handleClick.bind(this)

    }

    isAusResident(isTrue){
        this.setState({
            ausResidentSet: isTrue
        });
    }

    onChangeStateChild(){
        this.handleClick();
    }


    handleClick(e)
    {
        this.setState({show:!this.state.show})
    }

    nameAndDOB() {

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

    showDetails() {
        return(
            <div>

                <h5> Personal details</h5>

                <Title/>
                {this.nameAndDOB()}
                <MaritalStatus/>
                <FinancialDependants/>

                <div className={"form-item-padding"}>
                    Driver's licence number (Optional)
                    <Input type="text" name="licenceNo" id="licenceNo" />
                </div>
                <TaxPurposes isAusResident={this.isAusResident.bind(this)}/>
                {
                    this.state.ausResidentSet === "YES" &&
                        <IsAusResident/>
                }
                <Button onClick={this.onChangeStateChild.bind(this)}>Previous</Button>
                <Button color="#c20000" onClick={this.onChangeStateChild.bind(this)}>Next</Button>
            </div>
        )
    }

    render() {

        if(this.state.show){
            return this.showDetails()
        }
        else{
            return(
                <Button className="editItem" onClick={this.handleClick}>+ Edit these details</Button>
            )
        }

    }

}