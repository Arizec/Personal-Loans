import React from 'react';
import '../../../css/App.css';
import {FormGroup, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class LiabilityDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            hasLiabilities: ""
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
                <div className={"form-item-padding"} onChange={(event)=>{this.setState({hasLiabilities: event.target.value})}}>
                    We only need details of things that aren't with us i.e. we don't need details about bank accounts with
                    us.

                    Do you have any assets?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="liabilities-yes" name="hasLiabilities" value="YES" checked={this.state.hasLiabilities==="YES"}/>
                                <label htmlFor="liabilities-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="liabilities-no" name="hasLiabilities" value="NO" checked={this.state.hasLiabilities==="NO"} />
                                <label htmlFor="liabilities-no">No</label>
                            </li>
                        </ul><br/><br/>
                    </FormGroup>

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