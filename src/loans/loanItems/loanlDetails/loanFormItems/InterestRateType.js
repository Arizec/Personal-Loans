import React from 'react';
import '../../../../css/App.css';
import { FormGroup} from 'reactstrap';

//Header for application
export default class InterestRateType extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            loanType:this.props.loanType
        };

        this.saveLoanType=this.saveLoanType.bind(this)

    }

    saveLoanType(event){
        this.setState({loanType: event.target.value});
        this.props.saveLoanType(event.target.value);
    }


    render() {
        return (
            <div className={"form-item-padding" } onChange={this.saveLoanType}>Would you like a fixed or variable interest rate?
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