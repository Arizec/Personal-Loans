import React from 'react';
import '../../../css/App.css';
import { FormGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class OwnershipDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            hasAssets: ""
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

                <div className={"form-item-padding"} onChange={(event)=>{this.setState({hasAssets: event.target.value})}}>
                    We only need details of things that aren't with us i.e. we don't need details about bank accounts with
                    us.

                    Do you have any assets?
                    <FormGroup>
                        <ul className="radio-button">
                            <li >
                                <input type="radio" id="assets-yes" name="hasAssets" value="YES" checked={this.state.hasAssets==="YES"}/>
                                <label htmlFor="assets-yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="assets-no" name="hasAssets" value="NO" checked={this.state.hasAssets==="NO"} />
                                <label htmlFor="assets-no">No</label>
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