import React from 'react';
import '../../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';


const maritalStatus = [
    { value: 'single'    , label: 'Single' },
    { value: 'married'   , label: 'Married' },
    { value: 'defacto'   , label: 'Defacto' },
    { value: 'separated' , label: 'Separated' },
    { value: 'divorced'  , label: 'Divorced' },
    { value: 'widowed'   , label: 'Widowed' }
];


//Header for application
export default class MaritalStatus extends React.Component {
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
                Marital status
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={maritalStatus}/>
            </div>

        );
    }
}