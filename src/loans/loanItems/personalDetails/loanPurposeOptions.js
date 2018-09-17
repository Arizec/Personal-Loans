import React from 'react';
import '../../../css/App.css';
import Select from 'react-select';


const loanPurposeOptions = [
    { value: 'chocolate', label: 'New car' },
    { value: 'strawberry', label: 'Used car' },
    { value: 'vanilla', label: 'Debt consolidation' }
];

//Header for application
export default class LoanPurposeOptions extends React.Component {

    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }


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