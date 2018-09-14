import React from 'react';
import '../css/App.css';
import Header from "./Header";
import { Button, FormGroup, Label, Input } from 'reactstrap';
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
import PersonalDetails from "./loanItems/PersonalDetails";

const background = require('../assets/beach.png');

//Shows all admin users that can currently manage the event
//Allows main admin to add other admin or invite attendee users
export default class Loans extends React.Component {

    render() {
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
                                  <PersonalDetails/>
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