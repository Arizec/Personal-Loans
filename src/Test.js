import React from 'react';
import './css/App.css';
import {Button} from 'reactstrap'

//Home page for specific events. Presents a user with the option to:
//Go to questions/polls/analytics
//And gives a brief overview of those pages
export default class Test extends React.Component {

    state = {
        items: []
    };

    getProducts(){
        fetch('http://localhost:3000/submission')
            .then(response => {
                console.log(response)
            })
            .catch(err => console.error("err", err));

    }

    //Landing page
    render() {
        return (
            <div>
                <h1>hi</h1>
                {this.getProducts()}
                <Button onClick={
                    () => {
                        this.props.history.push('/submission')
                    }}> Testhi</Button>
            </div>

        );
    }
}