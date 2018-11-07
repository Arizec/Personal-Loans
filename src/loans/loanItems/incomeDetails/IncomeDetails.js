import React from 'react';
import '../../../css/App.css';
import { Label, FormGroup, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class IncomeDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            employmentStatus: null
        };

        this.handleClick=this.handleClick.bind(this)

    }

    onChangeStateChild(){
        this.handleClick();
        this.props.changeState(this.state);
    }


    handleClick(e)
    {
        this.setState({show:!this.state.show})
    }

    incomeTypes(){
        return(
            <div>
                Please enter your current fornightly income (net).

                <div className={"form-item-padding"}>
                    Salary <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Family allowance <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Pensions <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Rental income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Self-employed income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Superannuation income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Dividend income <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Overtime <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Commission <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Child support <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>

                <div className={"form-item-padding"}>
                    Bonus <Input type="text" name="firstName" id="firstName" value='0'/>
                </div>
            </div>
        )
    }

    showDetails(){
        return (
            <div>

                {this.incomeTypes()}

                <Button className={"next-button"} color="#c20000" onClick={this.onChangeStateChild.bind(this)}>Next</Button>
            </div>

        );
    }

    render() {
        if(this.state.show){
            return this.showDetails()
        }
        else{
            return(
                <Button className="editItem" onClick={this.handleClick}>+ Edit these details</Button>
            )
        }
    }

}