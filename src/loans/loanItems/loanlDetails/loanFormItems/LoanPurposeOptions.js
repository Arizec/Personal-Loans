import React from 'react';
import '../../../../css/App.css';
import Select from 'react-select';


const loanPurposeOptions = [
    { value: 'new-car', label: 'New car' },
    { value: 'used-car', label: 'Used car' },
    { value: 'debt-consolidation', label: 'Debt consolidation' }
];

//Header for application
export default class LoanPurposeOptions extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: this.props.loanPurpose,
        };

        this.saveLoanPurpose=this.saveLoanPurpose.bind(this)

    }

    saveLoanPurpose(selectedOption){
        this.props.saveLoanPurpose(selectedOption);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.saveLoanPurpose(selectedOption);
    };


    render() {

        const { selectedOption } = this.state;
        return (
            <div className={"form-item-padding"}>What is the main purpose for this loan?
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={loanPurposeOptions}/>
            </div>

        );
    }

}