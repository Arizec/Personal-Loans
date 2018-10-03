import React from 'react';
import '../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import '../../../css/App.css';
import Select from 'react-select';


const financialDependants = [
    { value: '0' , label: '0' },
    { value: '1' , label: '1' },
    { value: '2' , label: '2' },
    { value: '3' , label: '3' },
    { value: '4' , label: '4' },
    { value: '5' , label: '5' },
    { value: '6' , label: '6' },
    { value: '7' , label: '7' },
    { value: '8' , label: '8' },
    { value: '9+', label: '9+' },
];


//Header for application
export default class FinancialDependants extends React.Component {
    state = {
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };


    render() {
        const { selectedOption } = this.state;
        return (
            <div className={"form-item-padding"}>
                Number of financial dependants
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={financialDependants}/>
            </div>

        );
    }
}