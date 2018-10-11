import React from 'react';
import '../../../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';


const employmentStatus = [
    { value: 'full-time'    , label: 'Full time' },
    { value: 'part-time'    , label: 'Part time' },
    { value: 'casual'       , label: 'Casual' },
    { value: 'self-employed', label: 'Self-employed' },
    { value: 'contractor'   , label: 'Contractor' },
    { value: 'retired'       , label: 'Retired' },
    { value: 'home-duties'  , label: 'Home Duties' },
    { value: 'student'      , label: 'Student' },
    { value: 'unemployed'   , label: 'Unemployed' }
];


//Header for application
export default class EmploymentStatus extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: this.props.employmentStatus,
        };
        this.saveEmploymentStatus=this.saveEmploymentStatus.bind(this)
    }

    saveEmploymentStatus(selectedOption){
        this.props.saveEmploymentStatus(selectedOption);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.saveEmploymentStatus(selectedOption);
    };


    render() {
        const { selectedOption } = this.state;
        return (
            <div className={"form-item-padding"}>
                What is your employment status?
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={employmentStatus}/>
            </div>

        );
    }
}