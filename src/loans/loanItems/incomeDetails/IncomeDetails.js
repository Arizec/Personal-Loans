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
    }


    handleClick(e)
    {
        this.setState({show:!this.state.show})
    }

    showDetails(){
        return (
            <div>
                <h1>Section 4</h1>

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