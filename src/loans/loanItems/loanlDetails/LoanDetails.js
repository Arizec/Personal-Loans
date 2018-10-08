import React from 'react';
import '../../../css/App.css';
import { Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import LoanPurposeOptions from "./loanFormItems/LoanPurposeOptions";
import RepaymentFrequencyOptions from "./loanFormItems/RepaymentFrequencyOptions";
import LoanTermOptions from "./loanFormItems/LoanTermOptions";
import ExistingCustomer from "./loanFormItems/ExistingCustomer";
import InterestRateType from "./loanFormItems/InterestRateType";

//Header for application
export default class LoanDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
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
                <ExistingCustomer/>
                <div className={"form-item-padding"}>How much would you like to borrow?
                    <Input type="text" name="loanAmount" id="loanAmount" placeholder={"$ "+this.state.nabId2} onBlur={(event)=>{this.setState({amount: event.target.value})}} />
                </div>
                <InterestRateType/>
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