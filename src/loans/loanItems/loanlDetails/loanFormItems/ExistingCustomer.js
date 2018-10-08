import React from 'react';
import '../../../../css/App.css';
import { FormGroup, Input } from 'reactstrap';

//Header for application
export default class ExistingCustomer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            peopleNo: "",
            existingCustomer: "",
            existingCustomer2: "",
            nabId: "",
            nabId2:""
        };


    }

    render() {
        return (
            <div className={"form-item-padding"}>
                <div className={"form-item-padding"} onChange={(event)=>{this.setState({peopleNo: event.target.value})}}>How many people are applying?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="peopleNo1" name="peopleNo" value="ONE" checked={this.state.peopleNo === "ONE"}/>
                                <label htmlFor="peopleNo1">1</label>
                            </li>
                            <li>
                                <input type="radio" id="peopleNo2" name="peopleNo" value="TWO" checked={this.state.peopleNo==="TWO"} />
                                <label htmlFor="peopleNo2">2</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>
                <div className={"form-item-padding"} onChange={(event)=>{this.setState({existingCustomer: event.target.value})}}>Are you an existing customer?
                    <FormGroup>
                        <ul className="radio-button">
                            <li>
                                <input type="radio" id="existingCustomerYes" name="existingCustomer" value="YES" checked={this.state.existingCustomer==="YES"}/>
                                <label htmlFor="existingCustomerYes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="existingCustomerNo" name="existingCustomer" value="NO" checked={this.state.existingCustomer==="NO"}/>
                                <label htmlFor="existingCustomerNo">No</label>
                            </li>
                        </ul><br/><br/>

                    </FormGroup>

                </div>
                {
                    this.state.existingCustomer === "YES" &&
                        <div className={"form-item-padding"}>What is your NAB Id? (optional)
                            <Input type="text" name="nabID" id="nabID" placeholder={this.state.nabId} onBlur={(event)=>{this.setState({nabId: event.target.value})}} />
                        </div>
                }
                {this.state.peopleNo === "TWO" &&
                    <div className={"form-item-padding"} onChange={(event)=>{this.setState({existingCustomer2: event.target.value})}}>Is the other person an existing customer?
                        <FormGroup>
                            <ul className="radio-button">
                                <li className>
                                    <input type="radio" id="existingCustomer2Yes" name="existingCustomer2" value="YES" checked={this.state.existingCustomer2==="YES"}/>
                                    <label htmlFor="existingCustomer2Yes">Yes</label>
                                </li>
                                <li>
                                    <input type="radio" id="existingCustomer2No" name="existingCustomer2" value="NO" checked={this.state.existingCustomer2==="NO"}/>
                                    <label htmlFor="existingCustomer2No">No</label>
                                </li>
                            </ul><br/><br/>

                        </FormGroup>


                    </div>
                }
                {
                    this.state.existingCustomer2 === "YES" &&
                        <div className={"form-item-padding"}>What is the other persons NAB Id? (optional)
                            <Input type="text" name="nabID2" id="nabID2" placeholder={this.state.nabId2} onBlur={(event)=>{this.setState({nabId2: event.target.value})}}/>
                        </div>
                }
            </div>

        );
    }

}