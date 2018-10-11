import React from 'react';
import '../../../css/App.css';
import { Label, FormGroup, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class OwnershipDetails extends React.Component {

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

    showDetails(){
        return (
            <div>
                <h6>-- INPUT INFO @ /ownershipDetails ---</h6>
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