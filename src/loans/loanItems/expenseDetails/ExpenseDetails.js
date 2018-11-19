import React from 'react';
import '../../../css/App.css';
import { Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class ExpenseDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            rent: "",
            otherExpenses: ""
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

    showDetails(){
        return (
            <div>
                <div className={"form-item-padding"}>
                    How much rent do you pay per month?
                    <Input type="text" name="rent" id="rent" value={this.state.rent}
                           onChange={(event)=>{this.setState({rent: event.target.value})}}/>
                </div>

                <div className={"form-item-padding"}>
                    What are your other general living expenses per month?
                    <Input type="text" name="rent" id="rent" value={this.state.otherExpenses}
                           onChange={(event)=>{this.setState({otherExpenses: event.target.value})}}/>
                </div>


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