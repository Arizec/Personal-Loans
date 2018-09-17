import * as React from "react";
const sumary_image = require('../assets/icon-personal-loan.svg');
export default class LoanSummary extends React.Component {

    constructor(props){
        super(props);

    }
    state = {
        numberOfPeople:this.props.numberOfPeople,
        borrowAmount: this.props.borrowAmount,
        loanPeriod: this.props.loanPeriod,
        estimatedRepayment:this.props.estimatedRepayment
}


    render() {
        return (
            <div>
                <img src={sumary_image} alt="Home - NAB" id="nab-logo-image"/>
                <p className="summary-title"> Your personal loan</p>
                <p>{this.state.numberOfPeople}</p>
                <div>
                    <span>
                        <p>You want to borrow: {this.state.borrowAmount}</p>
                        <br/>
                        <p>Over a period: {this.state.loanPeriod}</p>
                        <p>Estimated total repayment amount {this.state.estimatedRepayment}</p>
                        <p className="disclaimer">*Calculations are based on our headline interest rate and are estimates only. The amount includes the monthly Loan Service Fee and NAB Personal Loan cover (if selected, for the first year). The interest rate you get may differ from the headline rate below. See Tooltip for Headline rate for more information.</p>
                    </span>
                </div>

            </div>

        );
    }
}