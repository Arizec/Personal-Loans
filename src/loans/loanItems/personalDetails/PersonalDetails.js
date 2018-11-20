import React from 'react';
import '../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import Title from "./personalFormItems/Title";
import CountriesSelect from "react-form-countries-select";
import MaritalStatus from "./personalFormItems/MaritalStatus";
import FinancialDependants from "./personalFormItems/FinancialDependants";
import TinReason from "./personalFormItems/TinReason";
import IsAusResident from "./personalFormItems/IsAusResident";


//Header for application
export default class PersonalDetails extends React.Component {

    constructor (props) {
        super(props);

        let details = this.props.personalDetails;

        this.state = {
            show: true,

            personalInfo: {
                title: details.title,
                gender: details.gender,
                firstName: details.firstName,
                middleName:details.middleName,
                lastName: details.lastName,
                maritalStatus: details.maritalStatus,
                dependents: details.dependents,
                driversLicence: details.driversLicence,
                ausResident: details.ausResident,
                usResident: details.usResident,
                otherCountryResident: details.otherCountryResident
            },
            currentAddress: {
                type: details.type,
                postalAddress: {
                    unit: details.unit,
                    number: details.number,
                    street: details.street,
                    suffix: details.suffix,
                    state: details.state,
                    country: details.country,
                    postalCode: details.postalCode,
                },
                accommodationType: details.accommodationType,
                stayingSince: details.stayingSince
            },
            contacts: {
                personalMobile: details.personalMobile,
                personalEmail: details.personalEmail,
                homePhone: details.homePhone
            }


        };

        this.handleClick=this.handleClick.bind(this)

    }


    saveTitleStatus(type){
        this.setState({title: type});
    }

    saveMaritalStatus(type){
        this.setState({maritalStatus: type});
    }

    saveDependentsStatus(type){
        this.setState({dependents: type});
    }

    onChangeStateChild(){
        this.handleClick();
        this.props.changeState(this.state);
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
                    <Input type="text" name="firstName" id="firstName" value={this.state.firstName}
                           onChange={(event)=>{this.setState({firstName: event.target.value})}}/>
                </div>

                <div className={"form-item-padding"}>
                    Middle name (Optional)
                    <Input type="text" name="middleName" id="middleName" value={this.state.middleName}
                           onChange={(event)=>{this.setState({middleName: event.target.value})}}/>
                </div>

                <div className={"form-item-padding"}>
                    Last name
                    <Input type="text" name="lastName" id="lastName" value={this.state.lastName}
                           onChange={(event)=>{this.setState({lastName: event.target.value})}}/>
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

    onCountrySelect = (event, country) => {
        // event {SyntheticEvent<HTMLSelectElement>} - React HTML event
        // country {Object} - Object representing the state
        // country.name {string} - The full name of the selected country
        // country.abbreviation {string} - The two character country code
    }

    getTaxInfo() {

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

                {this.state.otherCountryResident === "NO" &&
                    <TinReason/>

                }
            </div>

        );
    }

    showDetails() {
        return(
            <div>

                <h5> Personal details</h5>

                <div className={"form-item-padding"} onChange={(event)=>{this.setState({gender: event.target.value})}}>
                    Please select your gender:
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="male" name="gender" value="MALE" checked={this.state.gender==="MALE"}/>
                                <label htmlFor="male">Male</label>
                            </li>
                            <li>
                                <input type="radio" id="female" name="gender" value="FEMALE" checked={this.state.gender==="FEMALE"} />
                                <label htmlFor="female">Female</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>

                <Title saveTitleStatus={this.saveTitleStatus.bind(this)}
                       title={this.state.title}/>
                {this.nameAndDOB()}

                <MaritalStatus saveMaritalStatus={this.saveMaritalStatus.bind(this)}
                               maritalStatus={this.state.maritalStatus}/>

                <FinancialDependants saveDependentsStatus={this.saveDependentsStatus.bind(this)}
                                     dependents={this.state.dependents}/>

                <div className={"form-item-padding"}>
                    Driver's licence number (Optional)
                    <Input type="text" name="licenceNo" id="licenceNo" value={this.state.driversLicence}
                           onChange={(event)=>{this.setState({driversLicence: event.target.value})}}/>
                </div>

                {this.getTaxInfo()}

                {/*<TaxPurposes isAusResident={this.isAusResident.bind(this)}/>*/}
                {
                    this.state.ausResident === "YES" &&
                        <IsAusResident/>
                }
                <Button className={"previous-button"} onClick={this.onChangeStateChild.bind(this)}>Previous</Button>
                <Button className={"next-button"} color="#c20000" onClick={this.onChangeStateChild.bind(this)}>Next</Button>
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