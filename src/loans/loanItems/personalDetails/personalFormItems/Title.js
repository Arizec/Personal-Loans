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
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: this.props.title,
        };
        this.saveTitleStatus=this.saveTitleStatus.bind(this)
    }

    saveTitleStatus(selectedOption){
        this.props.saveTitleStatus(selectedOption);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.saveTitleStatus(selectedOption);
    };


    render() {
        const { selectedOption } = this.state;
        return (
            <div className={"form-item-padding"}>
                Title/Salutation
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={title}/>
            </div>

        );
    }
}