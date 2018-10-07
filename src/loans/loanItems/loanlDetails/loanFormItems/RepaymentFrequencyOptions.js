import React from 'react';
import '../../../../css/App.css';
import Select from 'react-select';

const repaymentFrequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'fortnightly', label: 'Fortnightly' },
    { value: 'monthly', label: 'Monthly' }
];


//Header for application
export default class RepaymentFrequencyOptions extends React.Component {

    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div className={"form-item-padding"}>How often would you like to make repayments?
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={repaymentFrequencyOptions}/>
            </div>

        );
    }

}