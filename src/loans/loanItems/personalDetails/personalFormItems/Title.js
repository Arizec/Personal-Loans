import React from 'react';
import '../../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

const title = [
    { value: 'mr'  , label: 'Mr' },
    { value: 'mrs' , label: 'Mrs' },
    { value: 'miss', label: 'Miss' },
    { value: 'ms'  , label: 'Ms' },
    { value: 'dr'  , label: 'Dr' }
];


//Header for application
export default class Title extends React.Component {
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
                What is the main purpose for this loan?
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={title}/>
            </div>

        );
    }
}