import React from 'react';
import '../../../../css/App.css';
import { FormGroup} from 'reactstrap';

//Header for application
export default class InterestRateType extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            loanType:""
        };

    }

    render() {
        return (
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

        );
    }

}