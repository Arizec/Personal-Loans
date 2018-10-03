import React from 'react';
import '../../../css/App.css';
import Select from 'react-select';

const loanTermOptions = [
    { value: '1yr', label: '1 year' },
    { value: '2yrs', label: '2 years' },
    { value: '3yrs', label: '3 years' }
];

//Header for application
export default class LoanTermOptions extends React.Component {

    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div className={"form-item-padding"}>What loan term would you like?
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={loanTermOptions}/>

            </div>

        );
    }

}