import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loans from "./loans/Loans";
import Test from "./Test";



// To store all the routs
class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    {/*  USER ROUTES    */}
                    <Route path="/" render={(routeProps) => <Test {...routeProps}/>} />
                    <Route path="/submission" render={(routeProps) => <Loans {...routeProps}/>} />

                </Switch>
            </Router>
        );
    }
}

export default App;
