import React from 'react';
import '../../../css/App.css';
import { Button, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import LoanPurposeOptions from "./loanFormItems/LoanPurposeOptions";
import RepaymentFrequencyOptions from "./loanFormItems/RepaymentFrequencyOptions";
import LoanTermOptions from "./loanFormItems/LoanTermOptions";

//Header for application
export default class LoanDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            peopleNo: "",
            existingCustomer: "",
            existingCustomer2: "",
            show: true,
            nabId: "",
            nabId2:"",
            amount:"",
            loanType:"",
            personalDetails: true
        };

        this.handleClick=this.handleClick.bind(this)

    }

    onChangeStateChild(){
        this.handleClick();
        this.props.changeState(this.state.personalDetails);
    }


    handleClick(e)
    {
        this.setState({show:!this.state.show})
    }

    showDetails(){
        return (
            <div>
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
                    this.state.existingCustomer === "YES" ?
                        <div className={"form-item-padding"}>What is your NAB Id? (optional)
                            <Input type="text" name="nabID" id="nabID" placeholder={this.state.nabId} onBlur={(event)=>{this.setState({nabId: event.target.value})}} />
                        </div>
                        : ''
                }
                {this.state.peopleNo === "TWO" ?
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


                    </div> :
                    ''
                }
                {
                    this.state.existingCustomer2 === "YES" ?
                        <div className={"form-item-padding"}>What is the other persons NAB Id? (optional)
                            <Input type="text" name="nabID2" id="nabID2" placeholder={this.state.nabId2} onBlur={(event)=>{this.setState({nabId2: event.target.value})}}/>
                        </div>
                        : ''
                }
                <div className={"form-item-padding"}>How much would you like to borrow?
                    <Input type="text" name="loanAmount" id="loanAmount" placeholder={"$ "+this.state.nabId2} onBlur={(event)=>{this.setState({amount: event.target.value})}} />
                </div>
                <div className={"form-item-padding" } onChange={(event)=>{this.setState({loanType: event.target.value})}}>Would you like a fixed or variable interest rate?
                    <FormGroup>
                        <ul className="radio-button">
                            <li>
                                <input type="radio" id="variableInterest" name="interestRate" value="Variable" checked={this.state.loanType==="Variable"}/>
                                <label htmlFor="variableInterest">Variable</label>
                            </li>
                            <li>
                                <input type="radio" id="fixedInterest" name="interestRate" value="Fixed" checked={this.state.loanType==="Fixed"}/>
                                <label htmlFor="fixedInterest">Fixed</label>
                            </li>
                        </ul><br/><br/>

                    </FormGroup>


                </div>
                <LoanTermOptions/>
                <RepaymentFrequencyOptions/>
                <LoanPurposeOptions/>
                <Button color="#c20000" onClick={this.onChangeStateChild.bind(this)}>Next</Button>
            </div>

        );
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