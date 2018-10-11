import React from 'react';
import '../../../css/App.css';
import { Label, FormGroup, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EmploymentStatus from "./employmentFormItems/EmploymentStatus";
//Header for application
export default class EmploymentDetails extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: true,
            employmentStatus: this.props.employmentDetails.employmentStatus,
            employerName:  this.props.employmentDetails.employerName,
            jobTitle:  this.props.employmentDetails.jobTitle,
            startDate: ""
        };

        this.handleClick=this.handleClick.bind(this)

    }

    saveEmploymentStatus(type){
        this.setState({
            employmentStatus: type
        });
    }

    onChangeStateChild(){
        this.handleClick();
        this.props.changeState(this.state);
    }


    handleClick(e)
    {
        this.setState({show:!this.state.show})
    }

    employed(){

        return(
            <div>
                <div className={"form-item-padding"}>
                    Employer's name
                    <Input type="text" name="employerName" id="employerName" value={this.state.employerName}
                           onChange={(event)=>{this.setState({employerName: event.target.value})}}/>
                </div>

                <div className={"form-item-padding"}>
                    What's your job title?
                    <Input type="text" name="jobTitle" id="jobTitle" value={this.state.jobTitle}
                           onChange={(event)=>{this.setState({jobTitle: event.target.value})}}/>
                </div>

                <div className={"form-item-padding"}>
                    <FormGroup>
                        <Label for="exampleDate">When did you start working here?</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" value={this.state.startDate}
                               onChange={(event)=>{this.setState({startDate: event.target.value})}}/>
                    </FormGroup>
                </div>

            </div>
            )

    }

    selfEmployed(){
        return(
            <div>

                <div className={"form-item-padding"}>
                    <FormGroup>
                        <Label for="exampleDate">When did you start this company?</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                    </FormGroup>
                </div>

            </div>
        )
    }

    otherReasons(){
        return(
            <div>

                <div className={"form-item-padding"}>
                    <FormGroup>
                        <Label for="exampleDate">When did this status commence?</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                    </FormGroup>
                </div>

            </div>
        )
    }

    showDetails(){
        var optionChosen = "";

        if(this.state.employmentStatus !== null){
            optionChosen = this.state.employmentStatus.value;
        }

        return (
            <div>
               <EmploymentStatus saveEmploymentStatus={this.saveEmploymentStatus.bind(this)} employmentStatus={this.state.employmentStatus}/>
                {(optionChosen === 'full-time' || optionChosen === 'part-time' || optionChosen === 'casual'
                    || optionChosen === 'contractor') &&
                    this.employed()}

                {(optionChosen === 'self-employed') &&
                this.selfEmployed()}

                {(optionChosen === 'retired' || optionChosen === 'home-duties' || optionChosen === 'student'
                    || optionChosen === 'unemployed') &&
                this.otherReasons()}

                <Button className={"previous-button"} onClick={this.onChangeStateChild.bind(this)}>Previous</Button>
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