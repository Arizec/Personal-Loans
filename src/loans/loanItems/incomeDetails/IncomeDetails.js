import React from 'react';
import '../../../css/App.css';
import { Label, FormGroup, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class IncomeDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            employmentStatus: null,
            changesToEmployment: "",
            paymentDifficulty: "",
            legalIssues: ""
        };

        this.handleClick=this.handleClick.bind(this)

    }

    onChangeStateChild(){
        this.handleClick();
        this.props.changeState(this.state);
    }


    handleClick(e)
    {
        this.setState({show:!this.state.show})
    }

    paymentDifficulties(){
        return(
            <div>

                <div className={"form-item-padding"} onChange={(event)=>{this.setState({changesToEmployment: event.target.value})}}>
                    Do you foresee any major changes to your employment, income and/or expenses over the next 12 months
                    that will make it difficult for you to meet your financial commitments?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="aus-resident-yes" name="ausResident" value="YES" checked={this.state.changesToEmployment==="YES"}/>
                                <label htmlFor="aus-resident-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="aus-resident-no" name="ausResident" value="NO" checked={this.state.changesToEmployment==="NO"} />
                                <label htmlFor="aus-resident-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>


                <div className={"form-item-padding"} onChange={(event)=>{this.setState({paymentDifficulty: event.target.value})}}>
                    Have you had any difficulties in making your loan repayments in the last 2 years?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="payment-yes" name="paymentDifficulty" value="YES" checked={this.state.paymentDifficulty==="YES"}/>
                                <label htmlFor="payment-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="payment-no" name="paymentDifficulty" value="NO" checked={this.state.paymentDifficulty==="NO"} />
                                <label htmlFor="payment-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>


                <div className={"form-item-padding"} onChange={(event)=>{this.setState({legalIssues: event.target.value})}}>
                    Have you ever had, or are there any judgements, attachments or legal proceedings against you relating
                    to financial matters?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="legal-yes" name="legalIssues" value="YES" checked={this.state.legalIssues==="YES"}/>
                                <label htmlFor="legal-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="legal-no" name="legalIssues" value="NO" checked={this.state.legalIssues==="NO"} />
                                <label htmlFor="legal-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

                </div>

            </div>
        )
    }

    incomeTypes(){
        return(
            <div>
                Please enter your current fornightly income (net).

                <div className={"form-item-padding"}>
                    Salary <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Family allowance <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Pensions <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Rental income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Self-employed income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Superannuation income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Dividend income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Overtime <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Commission <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Child support <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Bonus <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>
            </div>
        )
    }

    showDetails(){
        return (
            <div>

                {this.incomeTypes()}
                {this.paymentDifficulties()}

                <Button className={"next-button"} color="#c20000" onClick={this.onChangeStateChild.bind(this)}>Next</Button>
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