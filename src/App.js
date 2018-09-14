import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loans from "./loans/Loans";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    {/*  USER ROUTES    */}
                    <Route path="/" exact render={(props) => (<Loans/>)} />

                </Switch>
            </Router>
        );
    }
}

export default App;
