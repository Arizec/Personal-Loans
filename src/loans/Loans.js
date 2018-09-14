import React from 'react';
import '../css/App.css';
import Header from "./Header";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const background = require('../assets/beach.png');

const loanPurposeOptions = [
    { value: 'chocolate', label: 'New car' },
    { value: 'strawberry', label: 'Used car' },
    { value: 'vanilla', label: 'Debt consolidation' }
];

const repaymentFrequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'fortnightly', label: 'Fortnightly' },
    { value: 'monthly', label: 'Monthly' }
];

const loanTermOptions = [
    { value: '1yr', label: '1 year' },
    { value: '2yrs', label: '2 years' },
    { value: '3yrs', label: '3 years' }
];


//Shows all admin users that can currently manage the event
//Allows main admin to add other admin or invite attendee users
export default class Loans extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption, type) => {
        this.setState({ selectedOption });
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <Header/>
                <div className={"contain"}>
                        <img className={"homepage-background"} src={background} alt="" />
                    <div className={"centered"}>
                        <Accordion>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h4>Your loan details</h4>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className={"form-item-padding"}>How many people are applying?</div>
                                    <div className={"form-item-padding"}>Are you an existing customer?</div>
                                    <div className={"form-item-padding"}>How much would you like to borrow?</div>
                                    <div className={"form-item-padding"}>Would you like a fixed or variable interest rate?</div>
                                    <div className={"form-item-padding"}>What loan term would you like?
                                        <Select
                                            value={selectedOption}
                                            onChange={this.handleChange}
                                            options={loanTermOptions}/>

                                    </div>
                                    <div className={"form-item-padding"}>How often would you like to make repayments?
                                        <Select
                                            value={selectedOption}
                                            onChange={this.handleChange}
                                            options={repaymentFrequencyOptions}/>
                                    </div>

                                    <div className={"form-item-padding"}>What is the main purpose for this loan?
                                        <Select
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={loanPurposeOptions}/>
                                    </div>
                                    <Button color="danger">Next</Button>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h4>Tell us about yourself</h4>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>Body content</p>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>

                    {/*<div className="container">*/}
                        {/*<img className={"homepage-background"} src={background} alt="" />*/}
                            {/*<div className="centered">hi</div>*/}
                    {/*</div>*/}
            </div>

        );
    }
}