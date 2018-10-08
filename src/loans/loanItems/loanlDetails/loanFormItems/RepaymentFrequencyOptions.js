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
    constructor (props) {

        super(props);

        console.log(this.props.repaymentFrequency);

        this.state = {
            selectedOption: this.props.repaymentFrequency,
        };

        this.saveRepaymentFrequency=this.saveRepaymentFrequency.bind(this)

    }

    saveRepaymentFrequency(selectedOption){
        this.props.saveRepaymentFrequency(selectedOption);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.saveRepaymentFrequency(selectedOption);
    };


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