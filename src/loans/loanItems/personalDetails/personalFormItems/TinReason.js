import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../../css/App.css';
import Select from 'react-select';

const noTinReason = [
    { value: 'no-tin'        , label: "This country doesn't issue TINs" },
    { value: 'not-mandatory' , label: "It's not mandatory for me to disclose my TIN for this country" },
    { value: 'dont-have'     , label: "I don't have a TIN for this country" }
];

//Header for application
export default class TinReason extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedOption: null
        };

    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };


    render() {
        const { selectedOption } = this.state;
        return (
            <div>

                    <div>

                        <div className={"form-item-padding"}>
                            Please indicate the reason you can't provide the TIN
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={noTinReason}/>
                        </div>
                    </div>

            </div>



        );
    }
}